import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  // If you later want security headers, uncomment and tune:
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         { key: 'X-Content-Type-Options', value: 'nosniff' },
  //         { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  //         { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  //       ],
  //     },
  //   ]
  // },
}

export default withMDX(config)
