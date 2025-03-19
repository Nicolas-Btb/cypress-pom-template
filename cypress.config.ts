const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qyxau1",
  requestTimeout: 5000,
  defaultCommandTimeout: 5000,
  defaultBrowser: "chrome",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "http://localhost:5173/",

  },
});
