// components/Layout.js
import Head from "next/head";

export default function MetaLayout({
  children,
  title = "Full-stack Marketing and Branding Agency",
  description = "Vibrant Media Inc. delivers tailored digital marketing, web design, SEO, and branding services for businesses aiming for growth locally and globally.",
  canonical,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
      {children}
    </>
  );
}
