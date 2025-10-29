import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    comments: "",
    find: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
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
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // clear as user types
  };

  const validate = () => {
    const newErrors = {};

    // helpers
    const isEmpty = (v) => !v || v.trim() === "";
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const phoneOk = (v) => /^[+]?[\d\s()\-]{7,15}$/.test(v);

    if (isEmpty(formData.name) || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }
    if (isEmpty(formData.email) || !emailOk(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (isEmpty(formData.phone) || !phoneOk(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (isEmpty(formData.service)) {
      newErrors.service = "Select a service.";
    }
    if (isEmpty(formData.find)) {
      newErrors.find = "Select how did you find us.";
    }
    if (isEmpty(formData.country)) {
      newErrors.country = "Select your country.";
    }
    if (isEmpty(formData.comments) || formData.comments.trim().length < 10) {
      newErrors.comments = "Please add at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // console.log(formData, "=== form data");

    try {
      setSubmitting(true);

      const response = await fetch(
        "https://vmi12.com/clients/vmi/send_email.php",
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", // change to application/x-www-form-urlencoded if server requires
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json().catch(() => null);

      console.log("Server response:", result);
      if (result?.data?.succeeded == 1) {
        showToast("Form submitted successfully!", "success");
      } else {
        showToast("Something went wrong.");
      }

      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          country: "",
          comments: "",
          find: "",
        });
      }, 300);
    } catch (err) {
      console.error(err);
      showToast("Something went wrong.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const err = (k) => errors[k];

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
      <div className="w-6xl mx-auto max-container-width relative z-10 pt-40 mb-10">
        <div className="contact-hero-section-shadow"></div>
        <div className="about-banner-shadow"></div>
        <div className="contact-card">
          <div className="contact-content">
            {/* LEFT TEXT */}
            <div className="contact-left">
              <h2 className="contact-form-heading olivera-font">Let's talk!</h2>
              <p className="description">
                Got a project coming up? Drop us your details and we’ll be in
                touch to schedule an informal, no-obligation, non-salesy chat.
              </p>

              <div className="contact-info">
                <p>
                  <strong>For project inquiries only:</strong>
                  <br />
                  <a href="mailto:info@vibrantmediainc.com">
                    info@vibrantmediainc.com
                  </a>
                </p>

                <p>
                  <strong>For all inquiries:</strong>
                  <br />
                  <a href="tel:+923452646481">+92 3452 646 481</a>
                </p>

                <p>
                  <strong>Office:</strong>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/NywMa5KeaJBnTiy48"
                    target="_blank"
                  >
                    Vibrant Media Inc.
                    <br />
                    Plot # 1-A 1/6, 3rd Floor,
                    <br />
                    Block 1 Nazimabad,
                    <br />
                    Karachi, Pakistan
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-right">
              <form className="form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group form-width">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder=""
                      className={`poppins-font ${
                        err("name") ? "input-error" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!err("name")}
                      aria-describedby={err("name") ? "name-error" : undefined}
                    />
                    {err("name") && (
                      <p id="name-error" className="error-text poppins-font">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="form-group form-width">
                    <label htmlFor="company">
                      Company Name{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder=""
                      className="poppins-font"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group form-width">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder=""
                      className={`poppins-font ${
                        err("email") ? "input-error" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!err("email")}
                      aria-describedby={
                        err("email") ? "email-error" : undefined
                      }
                    />
                    {err("email") && (
                      <p id="email-error" className="error-text poppins-font">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="form-group form-width">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder=""
                      className={`poppins-font ${
                        err("phone") ? "input-error" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!err("phone")}
                      aria-describedby={
                        err("phone") ? "phone-error" : undefined
                      }
                    />
                    {err("phone") && (
                      <p id="phone-error" className="error-text poppins-font">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group form-width">
                    <label htmlFor="country">Country</label>
                    <input
                      id="country"
                      type="text"
                      placeholder=""
                      className={`poppins-font ${
                        err("country") ? "input-error" : ""
                      }`}
                      value={formData.country}
                      onChange={handleChange}
                      aria-invalid={!!err("country")}
                      aria-describedby={
                        err("country") ? "country-error" : undefined
                      }
                    />
                    {err("country") && (
                      <p id="country-error" className="error-text poppins-font">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div className="form-group form-width">
                    <label htmlFor="service">Services</label>
                    <select
                      id="service"
                      className={`poppins-font text-white ${
                        err("service") ? "input-error" : ""
                      }`}
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={!!err("service")}
                      aria-describedby={
                        err("service") ? "service-error" : undefined
                      }
                    >
                      <option value="">Select service</option>
                      <option value="Logo Design & Branding">
                        Logo Design & Branding
                      </option>
                      <option value="Print Collateral">Print Collateral</option>
                      <option value="Search Engine Optimization">
                        Search Engine Optimization
                      </option>
                      <option value="SEO Audit & Organic Growth">
                        SEO Audit & Organic Growth
                      </option>
                      <option value="Web Design UI/UX">Web Design UI/UX</option>
                      <option value="Web Development">Web Development</option>
                      <option value="WordPress Website">
                        WordPress Website
                      </option>
                      <option value="WordPress Plugin Development">
                        WordPress Plugin Development
                      </option>
                      <option value="WordPress Theme Development">
                        WordPress Theme Development
                      </option>
                      <option value="E-commerce (Shopify / Woocommerce)">
                        E-commerce (Shopify / Woocommerce)
                      </option>
                      <option value="Web Application Development">
                        Web Application Development
                      </option>
                      <option value="MVP Development">MVP Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="AI Automation & Development">
                        AI Automation & Development
                      </option>
                      <option value="AI Chatbot Solution">
                        AI Chatbot Solution
                      </option>
                      <option value="Website Maintenance">
                        Website Maintenance
                      </option>
                      <option value="WordPress Security">
                        WordPress Security
                      </option>
                      <option value="WordPress Malware Removal">
                        WordPress Malware Removal
                      </option>
                      <option value="Cloud Web Hosting">
                        Cloud Web Hosting
                      </option>
                      <option value="DNS Management">DNS Management</option>
                      <option value="Agency Partnership">
                        Agency Partnership
                      </option>
                    </select>
                    {err("service") && (
                      <p id="service-error" className="error-text poppins-font">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="How did you find us?">
                      How did you find us?
                    </label>
                    <select
                      id="find"
                      className={`poppins-font text-white ${
                        err("find") ? "input-error" : ""
                      }`}
                      value={formData.find}
                      onChange={handleChange}
                      aria-invalid={!!err("find")}
                      aria-describedby={err("find") ? "find-error" : undefined}
                    >
                      <option value="">Select options</option>
                      <option value="Search Engine (e.g. Google)">
                        Search Engine (e.g. Google)
                      </option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Facebook or Instagram">
                        Facebook or Instagram
                      </option>
                      <option value="AI Suggestion">AI Suggestion</option>
                      <option value="Referral">Referral</option>
                    </select>
                    {err("find") && (
                      <p id="find-error" className="error-text poppins-font">
                        {errors.find}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comments">
                    Describe your project requirements:
                  </label>
                  <textarea
                    id="comments"
                    placeholder=""
                    rows="6"
                    className={`poppins-font ${
                      err("comments") ? "input-error" : ""
                    }`}
                    value={formData.comments}
                    onChange={handleChange}
                    aria-invalid={!!err("comments")}
                    aria-describedby={
                      err("comments") ? "comments-error" : undefined
                    }
                  />
                  {err("comments") && (
                    <p id="comments-error" className="error-text poppins-font">
                      {errors.comments}
                    </p>
                  )}
                </div>

                <div className="nav-btn example-2 form-assist-btn">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
                    style={{
                      opacity: submitting ? 1 : 1,
                      cursor: submitting ? "not-allowed" : "pointer",
                      background:
                        "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                      boxShadow: `
                      0 0 100px #9561c540,
                      0 0 40px #9561c550,
                      0 0 80px #9561c570,
                      0 0 120px #9561c530
                    `,
                    }}
                  >
                    {submitting ? (
                      <div className="loader"></div>
                    ) : (
                      "Get A Quote"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* quick CSS helpers (tailor to your setup) */}
        <style jsx>{`
          .input-error {
            outline: 2px solid #ef4444;
          }
          .error-text {
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
          .text-muted {
            opacity: 0.7;
            font-size: 0.875rem;
          }
          @keyframes toast-slide-in {
            from {
              transform: translateY(10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
