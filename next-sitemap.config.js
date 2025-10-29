// next-sitemap.config.js (CommonJS)
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vibrantmediainc.com/", // <- hardcode your real domain
  generateRobotsTxt: true,
  outDir: "out", // important for next export
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500", "/api/*", "/admin/*"],
};
