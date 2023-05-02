const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)){
    console.log("No Custom config file found.")

    return {}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: '42uxh8',
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    chromeWebSecurity: false,
    baseUrl: "https://webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: true,
    //viewportHeight: 1000,
    //viewportWidth: 660,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
    configFile: 'reporter-config.json',
    },
    retries: {
      runMode:0,
      openMode: 0
    },
    env: {
      first_name: "Sarah",
      first_name1: " ",
      webdriveruni_homepage: "https://webdriveruniversity.com"
    }
  },
});
