import Assistance from "@/components/contact/Assistance";
import ContactForm from "@/components/contact/ContactForm";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import React from "react";

export async function getServerSideProps() {
  try {
    // Fetch dynamic content from WordPress API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/layout`);
    const data = await res.json(); // Assuming this gives you your layout data

    return {
      props: {
        layoutData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error);
    return {
      props: {
        layoutData: null,
      },
    };
  }
}

export default function ContactUs({ layoutData }) {
  console.log(layoutData, "From contact Page");

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
