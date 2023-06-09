

import withPlugins from 'next-compose-plugins'
import nextra from 'nextra'


const withNextra = nextra({
  theme: '@nextra-theme/clean',
  themeConfig: './theme.config.jsx',
  staticImage: false,
  defaultShowCopyCode: true,
  readingTime: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: process.env.GITHUB_REPO ? `/${process.env.GITHUB_REPO}`  : '',
  //assetPrefix: process.env.GITHUB_REPO ? `/${process.env.GITHUB_REPO}`  : '',
  images:{
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: true,
    GITHUB_REPO: process.env.GITHUB_REPO,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  }
}

export default withPlugins([ withNextra ], nextConfig)