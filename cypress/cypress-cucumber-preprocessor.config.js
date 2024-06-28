const { defineConfig } = require('@badeball/cypress-cucumber-preprocessor').cypressCucumberPreprocessorPlugin;

module.exports = defineConfig({
  nonGlobalStepDefinitions: true,
  stepDefinitions: 'cypress/e2e/CypressPractice/loginPage.js'
});
