/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,



  
//   redirects :()=>{
//     return[
//       {
//         source : '/',
//         destination : '/topstories',
//         permanent : true
//       }
//     ]
//   }
// }

// module.exports = nextConfig
module.exports ={
  async redirects(){
    return[
      {
        source : '/',
        destination : '/topstories',
        permanent : true
      }
    ]
  }
}