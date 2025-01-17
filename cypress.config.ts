const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout: 5000,
  defaultCommandTimeout: 5000,
  defaultBrowser: "chrome",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
  },
});
