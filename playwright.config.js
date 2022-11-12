// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests',
    timeout: 10*10000,
    use: {
      headless: false,
      ignoreHTTPSErrors: true,
      launchOptions: {
        // slowMo: 20000,
      }
    },
  
  };
  
  module.exports = config;