/** Static export: the site builds to plain HTML in /out, so it can be hosted free on
 *  Azure Static Web Apps, GitHub Pages, or Vercel. */
const nextConfig = { output: "export", trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
