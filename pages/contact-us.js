import Assistance from "@/components/contact/Assistance";
import ContactForm from "@/components/contact/ContactForm";
import StarsCanvas from "@/components/StarsCanvas";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <MetaLayout
        title="Get in Touch with Our Marketing Agency"
        description="Get in touch with Vibrant Media Inc. for tailored marketing solutions. Contact us via phone, email, or our online form to discuss your brand’s needs."
        canonical={`${meta_url}contact-us/`}
      />
      <main className="relative text-white overflow-hidden">
        <ContactForm />
        {/* <Assistance /> */}
      </main>
    </>
  );
}
