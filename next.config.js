/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects :()=>{
    return[
      {
        source : 'googlenews-clone-by-wai.netlify.app/',
        destination : 'googlenews-clone-by-wai.netlify.app/topstories',
        permanent : true
      }
    ]
  }
}

module.exports = nextConfig
