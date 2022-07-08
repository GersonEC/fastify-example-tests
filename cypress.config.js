const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 400,
  viewportHeight: 300,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: 'http://localhost:4200',
  },
})
