import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { career_url } from "@/config/constants";
import PhoneInput from "react-phone-input-2";

// Function to handle file conversion to base64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export async function getServerSideProps({ params }) {
  try {
    const slug = params.slug;

    const res = await fetch(`${career_url}/jobs/web/${slug}`);
    const jobData = await res.json();

    return {
      props: {
        job: jobData?.job || null,
      },
    };
  } catch (error) {
    console.error("Error fetching job details:", error);

    return {
      props: {
        job: null,
      },
    };
  }
}

export default function CareerDetail({ job }) {
  const [fileError, setFileError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfResidence: "",
    fitReason: "",
    currentSalary: "",
    source: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    // auto-hide after 3s
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    let phone = e.target.value;

    // Remove extra spaces
    phone = phone.replace(/\s+/g, "");

    // Convert +92 to 0
    if (phone.startsWith("+92")) {
      phone = "0" + phone.slice(3);
    }

    setFormData({
      ...formData,
      phone: phone,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Reset input so selecting the same file again will still trigger onChange
    e.target.value = null;

    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFormData((prevData) => ({ ...prevData, file }));
    } else {
      console.log("Please upload a valid PDF or DOCX file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    if (!formData.file) {
      setFileError("Please upload your Resume before submitting.");
      setIsSubmitting(false);
      return;
    }
    setFileError("");

    try {
      const base64File = formData.file
        ? await convertToBase64(formData.file)
        : null;

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        areaOfResidence: formData.areaOfResidence,
        fitReason: formData.fitReason,
        currentSalary: formData.currentSalary,
        source: formData.source,
        file: base64File,
        fileName: formData.file?.name,
        job_id: job.id,
      };

      const response = await fetch(`${career_url}/applications/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ⭐ Handle 409 gracefully (duplicate application)
      if (response.status === 409) {
        const data = await response.json(); // <- read message safely
        console.log("Duplicate Response:", data);
        setSubmitError(true);
        setIsSubmitting(false);

        // Optional: clear form
        // setFormData({
        //   fullName: "",
        //   email: "",
        //   phone: "",
        //   areaOfResidence: "",
        //   fitReason: "",
        //   currentSalary: "",
        //   source: "",
        //   file: null,
        // });

        return; // IMPORTANT: stop here
      }

      // ⭐ Handle non-OK responses (400, 500, etc.)
      if (!response.ok) {
        const data = await response.json();
        console.error("This is api error from not Ok:", data.message);
        showToast(data?.message, "error");
        setIsSubmitting(false);
        return; // Do not go to catch()
      }

      // ⭐ Success
      const result = await response.json();
      console.log("API Success:", result);

      setModalVisible(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        areaOfResidence: "",
        fitReason: "",
        currentSalary: "",
        source: "",
        file: null,
      });
    } catch (error) {
      console.error(
        "errrrrrrroorororoorororororororororororororororoer",
        error
      );
      showToast("Something went wrong.", "error");
      // DO NOT treat backend issues as error here
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleKeyPress = (e) => {
    // Allow only numeric characters, backspace (key code 8), and delete (key code 46)
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "+"
    ) {
      e.preventDefault();
    }
  };

  if (!job) return <p>Job not found</p>;

  return (
    <>
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-10 right-6 z-[9999] max-w-sm w-auto px-5 py-3 rounded-lg shadow-xl text-white flex items-start gap-3 transition-all duration-300
      ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          style={{ animation: "toast-slide-in 200ms ease-out" }}
        >
          <div className="text-sm leading-5 poppins-font">{toast.message}</div>
        </div>
      )}
      <header className="w-full bg-white border-b">
        <div className="max-w-4xl mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img
                src="/logo-dark.svg"
                alt="Vibrant Media Inc"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm !text-gray-700 poppins-font">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers" className="!text-black">
              <span className="border-b">Careers</span>
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          {/* Mobile Burger Icon */}
          <button
            className="md:hidden text-3xl !text-black focus:outline-none"
            onClick={() => setMobileNavOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN NAV */}
      <div
        className={`
          fixed inset-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${
            mobileNavOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }
        `}
      >
        {/* Dark overlay (click to close) */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileNavOpen(false)}
        />

        {/* Fullscreen white panel */}
        <div className="absolute inset-0 bg-white p-6 pt-4 flex flex-col">
          {/* Top row: logo + close */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <img
                src="/logo-dark.svg"
                alt="Vibrant Media Inc"
                className="h-10 w-auto"
              />
            </Link>

            <button
              className="text-3xl !text-black focus:outline-none"
              onClick={() => setMobileNavOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-10 text-xl text-black poppins-font items-center mt-14">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers" className="font-semibold">
              <span className="border-b">Careers</span>
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </div>

      <div className="px-5 py-12 bg-[#fff] text-gray-900 career-page">
        <div className="max-w-4xl mx-auto text-white">
          <div className="mb-6">
            <Link
              href="/careers"
              className="!text-gray-900 hover:text-gray-500 poppins-font"
            >
              <span>&lt; Back to jobs</span>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-4xl poppins-font-medium !text-[#080808] capitalize">
              {job.title}
            </h1>
            <a
              className="flex items-center gap-1 bg-black text-white py-2 px-3 text-sm sm:text-lg sm:py-2 sm:px-6 rounded-full hover:bg-gray-800 cursor-pointer poppins-font"
              href="#apply-form"
              style={{
                background:
                  "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
              }}
            >
              Apply <FiArrowUpRight />
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-black flex-wrap">
            <div className="flex gap-2">
              {job?.jobTags?.map((t) => (
                <span
                  key={t?.tag_id}
                  className="border-2 poppins-font-medium px-3 py-1 rounded-full capitalize"
                >
                  {t.tag?.name}
                </span>
              ))}
              <span className="border-2 px-3 py-1 rounded-full poppins-font-medium capitalize">
                {job.category?.name}
              </span>
            </div>

            <div className="flex items-center gap-1 !text-[#080808] poppins-font-medium capitalize">
              <HiOutlineLocationMarker />
              <span>{job.location}</span>
            </div>

            <span className="font-semibold !text-[#080808] poppins-font-medium">
              Salary:{" "}
              {job.minSalary === 0
                ? `PKR ${Number(job.maxSalary).toLocaleString("en-US")}`
                : `PKR ${Number(job.minSalary).toLocaleString(
                    "en-US"
                  )} - PKR ${Number(job.maxSalary).toLocaleString("en-US")}`}
            </span>
          </div>

          <div
            className="mt-6 text-black poppins-font"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />

          <div className="my-10 border-t border-gray-300"></div>

          <h2
            className="text-2xl font-semibold !text-[#080808] poppins-font mb-2"
            id="apply-form"
          >
            Apply for this job
          </h2>
          <p className="text-sm text-gray-500 mb-6 !text-[#080808] poppins-font">
            <span className="text-red-500">*</span> indicates a required field
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-6 mt-6">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>

                <div className="mt-2 w-full">
                  <PhoneInput
                    country="pk"
                    value={formData.phone}
                    onChange={(value) => {
                      setFormData({ ...formData, phone: value });
                    }}
                    disableDropdown
                    enableSearch={false}
                    masks={{ pk: "................" }}
                    inputClass="!w-full !h-12 !text-[#080808] poppins-font"
                    containerClass="!w-full border border-gray-300 rounded-lg overflow-hidden"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label
                  htmlFor="areaOfResidence"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Area of Residence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="areaOfResidence"
                  name="areaOfResidence"
                  value={formData.areaOfResidence}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <div className="flex flex-col sm:col-span-2">
                <label
                  htmlFor="fitReason"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Why are you the best fit for this role?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="fitReason"
                  name="fitReason"
                  value={formData.fitReason}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full border !border-gray-300 !rounded-lg !text-[#080808] poppins-font !shadow-none"
                  maxLength="300"
                  rows="5"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-6 mt-6">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="currentSalary"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  Current / Last Salary <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center mt-2 w-full border border-gray-300 rounded-lg">
                  {/* Pakistan Flag */}
                  <span className="mr-2 text-md career-salary text-black poppins-font">
                    PKR
                  </span>

                  <input
                    type="number"
                    id="currentSalary"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Limit the number of digits to 6
                      if (value.length > 6) {
                        value = value.slice(0, 7);
                      }

                      setFormData({ ...formData, currentSalary: value });
                    }}
                    required
                    className="flex-1 outline-none !text-[#080808] poppins-font career-phone"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label
                  htmlFor="source"
                  className="block text-sm font-medium !text-[#080808] poppins-font"
                >
                  How did you find us? <span className="text-red-500">*</span>
                </label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
                >
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Indeed">Indeed</option>
                  <option value="Friend told me">Friend told me</option>
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col sm:col-span-2 mt-6">
              <label
                htmlFor="file"
                className="block text-sm font-medium !text-[#080808] poppins-font"
              >
                Upload Resume <span className="text-red-500">*</span>
              </label>

              <div
                className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition 
                  ${
                    formData.file
                      ? "border-green-500 bg-green-50"
                      : "border-gray-400 bg-gray-50 hover:bg-gray-100"
                  }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  const fileInput = document.getElementById("fileInput");

                  // Force reset for same-file uploads
                  if (fileInput) fileInput.value = null;

                  handleFileChange({ target: { files: [file], value: null } });
                }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                {!formData.file && (
                  <div>
                    <p className="poppins-font !text-gray-600">
                      Drag & drop your Resume here
                    </p>
                    <p className="text-sm mt-1 poppins-font !text-gray-500">
                      or click to browse (PDF or DOCX)
                    </p>
                  </div>
                )}

                {formData.file && (
                  <div className="flex flex-col items-center">
                    <p className="poppins-font-medium !text-green-700 poppins-font">
                      {formData.file.name}
                    </p>
                    <p className="!text-gray-500 text-sm poppins-font mt-1">
                      File selected successfully
                    </p>
                  </div>
                )}
              </div>
              {fileError && (
                <p className="!text-red-500 text-sm mt-2 poppins-font">
                  {fileError}
                </p>
              )}

              <input
                type="file"
                id="fileInput"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {submitError && (
              <div>
                <p className="!text-red-500 poppins-font mt-2">
                  * Seems like you already submitted your application to this
                  job. If not the case then contact us at
                  careers@vibrantmediainc.com
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-black text-white py-3 px-6 rounded-full poppins-font ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>

        {/* Success Modal */}
        {modalVisible && (
          <div className="fixed inset-0 bg-opacity- backdrop-blur-md flex justify-center items-center z-50">
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-out"
              style={{
                transform: modalVisible ? "translateY(0)" : "translateY(-20px)",
                opacity: modalVisible ? 1 : 0,
              }}
            >
              <h2 className="text-2xl poppins-font-medium text-center mb-4">
                Your application has been submitted successfully!
              </h2>
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Disable Layout for this page
CareerDetail.disableLayout = true;
