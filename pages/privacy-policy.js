import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <MetaLayout
        title="Privacy & Cookie Policy - Vibrant Media Inc"
        description="Vibrant Media Inc’s Privacy & Cookie Policy explains how we handle personal data, cookies, and user information with transparency and security."
        canonical={`${meta_url}privacy-policy/`}
      />
      <main className="relative text-white overflow-hidden">
        <div className="w-6xl mx-auto max-container-width relative z-10 pt-40 mb-10">
          <div className="contact-hero-section-shadow"></div>
          <div className="about-banner-shadow"></div>
          <div className="contact-card">
            <div className="contact-content">
              <div className="poppins-font privacy-list">
                <h2 className="contact-form-heading olivera-font mb-8">
                  Privacy & Cookie Policy
                </h2>

                <h2 className="poppins-font-bold mb-2">1. Introduction</h2>
                <p className="mb-6">
                  At Vibrant Media Inc. (“we”, “us”, “our”), we respect your
                  privacy and are committed to protecting the personal data you
                  share with us. This Privacy &amp; Cookie Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you visit our Site or use our services.
                </p>

                <h2 className="mb-1 poppins-font-bold">
                  2. What Information We Collect
                </h2>
                <p className="mb-1">
                  We may collect the following categories of information:
                </p>
                <ul className="mb-6">
                  <li className="mb-1">
                    <strong className="poppins-font-medium">
                      Personal information:
                    </strong>{" "}
                    Name, email address, phone number, company name, job title —
                    when you fill out our contact or project inquiry form.
                  </li>
                  <li className="mb-1">
                    <strong className="poppins-font-medium">
                      Project-related information:
                    </strong>{" "}
                    Details about your business, requirements, goals, assets you
                    share (e.g. text, images, brand assets).
                  </li>
                  <li className="mb-1">
                    <strong className="poppins-font-medium">Usage data:</strong>{" "}
                    Information about how you access and use our Site (IP
                    address, browser type, pages visited, time and date, etc.).
                  </li>
                  <li className="">
                    <strong className="poppins-font-medium">
                      Cookies and tracking data:
                    </strong>{" "}
                    Small files placed on your device to help us analyze Site
                    traffic, improve user experience, and for analytics.
                  </li>
                </ul>

                <h2 className="mb-1 poppins-font-bold">
                  3. How We Use Your Information
                </h2>
                <p className="mb-1">We use your information to:</p>
                <ul className="mb-6">
                  <li className="mb-1">
                    Respond to your inquiries, provide quotes, deliver services,
                    and manage projects.
                  </li>
                  <li className="mb-1">
                    Communicate with you (e.g. email, support, updates).
                  </li>
                  <li className="mb-1">
                    Improve and personalize our services and website.
                  </li>
                  <li>
                    Monitor and analyze usage of our Site to improve
                    performance.
                  </li>
                </ul>

                <h2 className="mb-1 poppins-font-bold">
                  4. Cookies & Tracking Technologies
                </h2>
                <p className="mb-1">
                  We use cookies and similar tracking technologies to collect
                  and store certain information, such as your browsing behavior,
                  preferences, and whether you are a returning visitor. Cookies
                  help us to optimize and personalize your experience.
                </p>
                <p className="mb-6">
                  You may choose to disable cookies via your browser settings —
                  but note that some parts of the Site may not function properly
                  without them.
                </p>

                <h2 className="mb-1 poppins-font-bold">
                  5. Sharing and Disclosure of Information
                </h2>
                <p className="mb-1">
                  We will not sell, trade, or rent your personal information to
                  third parties. We may share your data only in the following
                  circumstances:
                </p>
                <ul className="mb-6 poppins-font-bold">
                  <li className="mb-1">
                    With service providers or contractors working on our behalf
                    (e.g. hosting, analytics), under confidentiality agreements.
                  </li>
                  <li className="mb-1">
                    If required by law, regulation, or legal process.
                  </li>
                  <li>
                    In connection with a merger, acquisition, or sale of all or
                    part of our business — with prior notice.
                  </li>
                </ul>

                <h2 className="mb-1 poppins-font-bold">6. Data Security</h2>
                <p className="mb-6">
                  We implement reasonable technical and organizational measures
                  to protect your personal data from unauthorized access, loss,
                  misuse, or alteration. However, no method of transmission over
                  the Internet or electronic storage is completely secure — so
                  we cannot guarantee absolute security.
                </p>

                <h2 className="mb-1 poppins-font-bold">7. Data Retention</h2>
                <p className="mb-6">
                  We will retain your personal information only as long as
                  necessary for the purposes for which it was collected (e.g. to
                  complete a project, respond to inquiries), or as required by
                  law. Once no longer needed, we will securely delete or
                  anonymize your data.
                </p>

                <h2 className="mb-1 poppins-font-bold">8. Your Rights</h2>
                <p className="mb-1">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="mb-1">
                  <li className="mb-1">
                    Access the personal data we hold about you.
                  </li>
                  <li className="mb-1">
                    Correct or update inaccurate or incomplete data.
                  </li>
                  <li className="mb-1">Request deletion of your data.</li>
                  <li className="mb-1">
                    Object to or restrict certain data processing.
                  </li>
                  <li className="mb-1">
                    Withdraw consent (where processing is based on consent).
                  </li>
                </ul>
                <p className="mb-4">
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:info@vibrantmediainc.com">
                    info@vibrantmediainc.com
                  </a>{" "}
                  or{" "}
                  <a href="mailto:ask@vibrantmediainc.com">
                    ask@vibrantmediainc.com
                  </a>
                  .
                </p>

                <h2 className="mb-1 poppins-font-bold">
                  9. Children’s Privacy
                </h2>
                <p className="mb-4">
                  Our services and Site are not intended for children under 16
                  (or the applicable age of majority in your jurisdiction). We
                  do not knowingly collect personal data from children.
                </p>

                <h2 className="mb-1">10. Changes to this Policy</h2>
                <p className="mb-4">
                  We may update this Privacy &amp; Cookie Policy at any time.
                  When we do, we will revise the “Last updated” date at the top
                  of the page and — where appropriate — notify you. By
                  continuing to use our Site or services after changes, you
                  accept the updated Policy.
                </p>

                <h2 className="mb-1 poppins-font-bold">11. Contact Us</h2>
                <p className="mb-1">
                  If you have any questions or concerns about this Policy or our
                  privacy practices, please contact us at:
                </p>
                <p className="mb-1">
                  Email:{" "}
                  <a href="mailto:info@vibrantmediainc.com">
                    info@vibrantmediainc.com
                  </a>{" "}
                  or{" "}
                  <a href="mailto:ask@vibrantmediainc.com">
                    ask@vibrantmediainc.com
                  </a>
                </p>
                <p>
                  Address: A-1/2 Office #607, Doctor’s Inn Plaza, Nazimabad #3,
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
