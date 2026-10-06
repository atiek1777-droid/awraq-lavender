/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // ينتج مجلد out/ جاهز للرفع على أي استضافة
  images: { unoptimized: true },
};
export default nextConfig;
