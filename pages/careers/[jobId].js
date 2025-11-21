import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { career_url } from "@/config/constants";

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
    const jobId = params.jobId;

    const res = await fetch(`${career_url}/jobs/web/${jobId}`);
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
    fname: "",
    lname: "",
    email: "",
    phone: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
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

    if (!formData.file) {
      setFileError("Please upload your CV before submitting.");
      setIsSubmitting(false);
      return;
    }
    setFileError("");

    try {
      // Convert file to base64 if there's a file
      const base64File = formData.file
        ? await convertToBase64(formData.file)
        : null;

      // Prepare the payload to send
      const payload = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        phone: formData.phone,
        file: base64File,
        job_id: job.id,
      };

      console.log("Payload:", payload); // Log payload for debugging

      // Send the POST request with the payload
      const response = await fetch(`${career_url}/applications/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(payload), // Convert the payload to a JSON string
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json(); // Parse the response

      console.log("API Response:", result); // Log the response for debugging
      setModalVisible(true); // Show success modal

      // Optionally reset the form or redirect the user
      setFormData({ fname: "", lname: "", email: "", phone: "", file: null });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (!job) return <p>Job not found</p>;

  return (
    <div className="px-5 py-12 bg-[#fff] text-gray-900 career-page">
      <div className="max-w-6xl mx-auto text-white">
        {/* Back to Jobs Link */}
        <div className="mb-6">
          <Link
            href="/careers"
            className="!text-gray-900 hover:text-gray-500 poppins-font"
          >
            <span>&lt; Back to jobs</span>
          </Link>
        </div>

        {/* Job Title and Apply Button */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold !text-[#080808] poppins-font">
            {job.title}
          </h1>
          {/* Apply Button */}
          <a
            className="flex items-center gap-1 bg-black text-white py-2 px-3 text-sm sm:text-lg sm:py-2 sm:px-6 rounded-full hover:bg-gray-800 cursor-pointer poppins-font"
            href="#apply-form" // Scroll to the form when clicked
          >
            Apply <FiArrowUpRight />
          </a>
        </div>

        {/* Tags, Category, Location, Salary */}
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-300 flex-wrap">
          {/* Tags */}
          <div className="flex gap-2 poppins-font">
            {job.jobTags?.map((t) => (
              <span
                key={t.tag_id}
                className="border px-3 py-1 rounded-full bg-gray-700"
              >
                {t.tag.name}
              </span>
            ))}
          </div>
          {/* Category */}
          <span className="border px-3 py-1 rounded-full bg-gray-700 poppins-font">
            {job.category?.name}
          </span>

          {/* Location */}
          <div className="flex items-center gap-1 !text-[#080808] poppins-font">
            <HiOutlineLocationMarker />
            <span>{job.location}</span>
          </div>

          {/* Salary */}
          <span className="font-semibold !text-[#080808] poppins-font">
            PKR: {job.salary}
          </span>
        </div>

        {/* Job Description */}
        <div
          className="mt-6 !text-[#080808] poppins-font"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        {/* Separator */}
        <div className="my-10 border-t border-gray-300"></div>

        {/* Apply Form */}
        <h2
          className="text-2xl font-semibold !text-[#080808] poppins-font"
          id="apply-form"
        >
          Apply for this job
        </h2>
        <p className="text-sm text-gray-500 mb-6 !text-[#080808] poppins-font">
          * indicates a required field
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:gap-6">
            {/* First Name */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="fname"
                className="block text-sm font-medium !text-[#080808] poppins-font"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="lname"
                className="block text-sm font-medium !text-[#080808] poppins-font"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6 mt-6">
            {/* Email */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium !text-[#080808] poppins-font"
              >
                Email <span className="text-red-500">*</span>
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

            {/* Phone */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium !text-[#080808] poppins-font"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg !text-[#080808] poppins-font"
              />
            </div>
          </div>

          {/* CV Upload */}
          <div className="flex flex-col sm:col-span-2 mt-6">
            {/* CV Upload */}

            <label
              htmlFor="file"
              className="block text-sm font-medium !text-[#080808] poppins-font"
            >
              Upload CV <span className="text-red-500">*</span>
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
                handleFileChange({ target: { files: [file] } });
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              {!formData.file && (
                <div>
                  <p className="poppins-font !text-gray-600">
                    Drag & drop your CV here
                  </p>
                  <p className="text-sm mt-1 poppins-font !text-gray-500">
                    or click to browse (PDF or DOCX)
                  </p>
                </div>
              )}

              {formData.file && (
                <div className="flex flex-col items-center">
                  <p className="font-semibold !text-green-700 poppins-font">
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

            {/* Hidden Input */}
            <input
              type="file"
              id="fileInput"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-black text-white py-2 px-6 rounded-full poppins-font ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
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
            <h2 className="text-2xl font-semibold text-center mb-4">
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
  );
}

// Disable Layout for this page
CareerDetail.disableLayout = true;
