const path = require('path')

const rootPath = process.cwd().replace('/app', '')
const localesPath = 'locales'
const localePath = path.join(rootPath, localesPath)

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  defaultNS: [],
  localePath,
  debug: true,
  returnObjects: true,
}
