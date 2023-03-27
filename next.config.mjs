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
  basePath: process.env.GITHUB_PAGES ? '/kh-docs' : '',
  //assetPrefix: process.env.GITHUB_PAGES ? '/kh-docs/' : '',
  images: {
    path: process.env.GITHUB_PAGES ? '/' : '/',
  }
  /*
  images: {
    unoptimized: true,
  },
  */
}

export default withPlugins([ withExportImages, withNextra ], nextConfig)