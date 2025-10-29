import React from "react";

// // Server-side data fetching function
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

export default function test({ layoutData }) {
  console.log(layoutData, "layoutData");
  return <div>This is test page</div>;
}
