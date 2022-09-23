/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath : '/topstories'
  // redirects :()=>{
  //   return[
  //     {
  //       source : '/',
  //       destination : '/topstories',
  //       permanent : true
  //     }
  //   ]
  // }
}

module.exports = nextConfig
