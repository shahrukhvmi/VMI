import Head from "next/head";
export default function MetaLayout({
  children,
  data,
  title = "Full-stack Marketing and Branding Agency",
  description = "Vibrant Media Inc. delivers tailored digital marketing, web design, SEO, and branding services for businesses aiming for growth locally and globally.",
  canonical,
  metaData, // API data passed as prop (contains meta tags, schema, etc.)
}) {
  const {
    title: metaTitle,
    description: metaDescription,
    robots,
    og_locale,
    og_type,
    og_title,
    og_url,
    og_site_name,
    article_modified_time,
    twitter_card,
    schema,
  } = data || {};


  console.log("Meta Layout data:", data);
  return (
    <>
      <Head>
        {/* Meta Title */}
        <title>{metaTitle || title}</title>
        {/* Meta Description */}
        <meta name="description" content={metaDescription || description} />
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        {/* Meta Robots */}
        {robots && (
          <meta
            name="robots"
            content={`${robots.index || "index"} , ${robots.follow || "follow"}`}
          />
        )}
        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={og_title || metaTitle} />
        <meta property="og:description" content={metaDescription || description} />
        <meta property="og:image" content={metaData?.image || "/default-image.jpg"} />
        <meta property="og:url" content={og_url || "window.location.href"} />
        <meta property="og:locale" content={og_locale || "en_US"} />
        <meta property="og:type" content={og_type || "article"} />
        <meta property="og:site_name" content={og_site_name || "Vibrant Media Inc"} />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitter_card || "summary_large_image"} />
        <meta name="twitter:title" content={og_title || metaTitle} />
        <meta name="twitter:description" content={metaDescription || description} />
        <meta name="twitter:image" content={metaData?.image || "/default-image.jpg"} />
        {/* Article Modified Time (for SEO/structured data) */}
        {article_modified_time && (
          <meta
            property="article:modified_time"
            content={article_modified_time}
          />
        )}
        {/* JSON-LD Schema Markup */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
        {/* Viewport Meta Tag for Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
}