/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vibrantmediainc.com",
  generateRobotsTxt: true,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/404", "/500", "/api/*", "/admin/*"],

  additionalPaths: async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/portfolio-slugs`
      );

      const items = await res.json();

      // 🔹 Generate ONLY slug pages
      return items.map((item) => ({
        loc: `/portfolio/${item.combined_slug}/`,
        lastmod: item.updated_at,
        priority: 0.8,
      }));
    } catch (error) {
      console.error("Sitemap slug fetch failed:", error);
      return [];
    }
  },
};
