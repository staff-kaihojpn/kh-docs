/** @type {import('next').NextConfig} */

import withPlugins from 'next-compose-plugins'
import nextra from 'nextra'
//import withExportImages from 'next-export-optimize-images'


const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

const nextConfig = {
  reactStrictMode: true,
  basePath: '/kh-docs',
  images: {
    unoptimized: true
},
}

export default withPlugins([ withNextra ], nextConfig)