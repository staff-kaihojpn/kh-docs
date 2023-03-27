/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.GITHUB_PAGES ? '/HOGE' : '',
}

module.exports = config