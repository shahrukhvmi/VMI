import Head from "next/head";

export default function MetaLayout({
  children,
  data = {},
  title = "Full-stack Marketing and Branding Agency",
  description = "Vibrant Media Inc. delivers tailored digital marketing, web design, SEO, and branding services for businesses aiming for growth locally and globally.",
  canonical,
}) {
  const {
    title: metaTitle,
    description: metaDescription,
    robots = {},
    og_locale,
    og_type,
    og_title,
    og_description,
    og_url,
    og_site_name,
    og_image,
    article_modified_time,
    twitter_card,
    twitter_title,
    twitter_description,
    twitter_image,
    schema,
  } = data;

  // ✅ Build robots meta dynamically (includes all possible directives)
  const robotsDirectives = [];

  if (robots.noindex) robotsDirectives.push("noindex");
  else robotsDirectives.push("index");

  if (robots.nofollow) robotsDirectives.push("nofollow");
  else robotsDirectives.push("follow");

  if (robots.nosnippet) robotsDirectives.push("nosnippet");
  if (robots.noarchive) robotsDirectives.push("noarchive");
  if (robots.noimageindex) robotsDirectives.push("noimageindex");

  const robotsContent = robotsDirectives.join(", ");

  // ✅ Handle OG/Twitter image
  const ogImageUrl =
    (Array.isArray(og_image) && og_image.length > 0 && og_image[0]?.url) ||
    twitter_image ||
    "https://crm.vmi12.com/wp-content/uploads/2025/10/site.png";

  // ✅ Handle canonical (prefer metaCanonical, fallback to prop or og_url)
  const canonicalUrl =
    canonical || og_url || "";

  return (
    <>
      <Head>
        {/* ✅ Basic Meta */}
        <title>{metaTitle || title}</title>
        <meta name="description" content={metaDescription || description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Robots */}
        <meta name="robots" content={robotsContent} />
        <meta
          name="keywords"
          content={
            schema?.["@graph"]?.[0]?.["@graph"]
              ?.find((i) => i["@type"] === "Article")
              ?.keywords || ""
          }
        />
        <meta
          name="publisher"
          content={
            schema?.["@graph"]?.[0]?.["@graph"]
              ?.find((i) => i["@type"] === "Article")
              ?.publisher?.["@id"] || ""
          }
        />

        {/* <meta
          name="publisher"
          content={schema?.["@graph"]?.[0]?.["@graph"]?.[6]?.publisher?.["@id"]
            || ""}
        /> */}
        {/* ✅ Open Graph */}
        <meta property="og:locale" content={og_locale || "en_US"} />
        <meta property="og:type" content={og_type || "article"} />
        <meta property="og:title" content={og_title || metaTitle || title} />
        <meta
          property="og:description"
          content={og_description || metaDescription || description}
        />
        <meta property="og:url" content={og_url || canonicalUrl} />
        <meta
          property="og:site_name"
          content={og_site_name || "Vibrant Media Inc"}
        />
        <meta property="og:image" content={ogImageUrl} />
        {article_modified_time && (
          <meta
            property="article:modified_time"
            content={article_modified_time}
          />
        )}

        {/* ✅ Twitter Card */}
        <meta
          name="twitter:card"
          content={twitter_card || "summary_large_image"}
        />
        <meta
          name="twitter:title"
          content={twitter_title || metaTitle || title}
        />
        <meta
          name="twitter:description"
          content={twitter_description || metaDescription || description}
        />
        <meta name="twitter:image" content={twitter_image || ogImageUrl} />

        {/* ✅ JSON-LD Structured Data */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}

        {/* ✅ Mobile Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {children}
    </>
  );
}
