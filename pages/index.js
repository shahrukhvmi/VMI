import { useEffect, useState } from 'react';
import MetaLayout from "@/Meta/MetaLayout"; // Assuming MetaLayout is used for SEO/meta tags
import { app_url, meta_url } from "@/config/constants";
import HeroSection from "@/components/HeroSection";
import RingSection from "@/components/RingSection";
import Creative from "@/components/Creative";
import HomePortfolioSection from "@/components/HomePortfolioSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Technologia from "@/components/Technologia";
import Footer from "@/components/Footer";
// getServerSideProps with error handling and loading state
export async function getServerSideProps() {
  try {
    const res = await fetch(`${app_url}/layout`);
    if (!res.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await res.json();
    // Check if data structure is valid
    if (!data || !data.data || !data.data.page_data) {
      throw new Error('Invalid data structure received');
    }
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return fallback data in case of an error
    return {
      props: {
        data: null, // Or fallback to empty data
        error: error.message, // Pass the error message to the page for debugging
      },
    };
  }
}
export default function Index({ data, error }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    // If there is an error passed in, update the state to show the error message
    if (error) {
      setHasError(true);
    }
  }, [error]);
  if (hasError) {
    return (
      <div className="error-page">
        <h1>Something went wrong!</h1>
        <p>{error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="loading-state">
        <h1>Loading...</h1>
        <p>We are fetching the data, please wait.</p>
      </div>
    );
  }
  const pageData = data?.data?.page_data;
  return (
    <>
      <MetaLayout
        title="Full-stack Marketing and Branding Agency"
        description="Vibrant Media Inc. delivers tailored digital marketing, web design, SEO, and branding services for businesses aiming for growth locally and globally."
        canonical={`${meta_url}`}
      />
      <main className="relative text-white min-h-screen overflow-hidden">
        {/* Main Content */}
        <div className="relative">
          <HeroSection bannerContent={pageData?.sections[0]} />
          <RingSection ringContent={pageData?.sections[1]} />
        </div>
        {/* Creative Section */}
        <Creative />
        {/* Home Portfolio Section */}
        <HomePortfolioSection />
        {/* Testimonials */}
        <TestimonialSlider />
        {/* Technologia */}
        <Technologia />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}