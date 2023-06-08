/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // do not use https://
    // array of WHITELISTED image domains
    domains: ["placekitten.com", "via.placeholder.com"]
  }
}

module.exports = nextConfig
