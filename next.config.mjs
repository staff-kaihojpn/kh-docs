/** @type {import('next').NextConfig} */

import withPlugins from 'next-compose-plugins'
import nextra from 'nextra'
import withExportImages from 'next-export-optimize-images'


const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV==="production" ? "/kh-docs" : "/",
  /*
  images: {
    loader: 'akamai',
    path: '/'
  }
  */
}

export default withPlugins([ withNextra, withExportImages ], nextConfig)