/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.GITHUB_PAGES ? '/kh-docs' : '',
}

module.exports = config