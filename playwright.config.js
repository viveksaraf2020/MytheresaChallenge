// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries : 1,
  timeout: 40 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [
    {
      name:'chrome',

      
  use: {

    browserName : 'chromium',
    baseURL : 'https://www.mytheresa.com/int_en/men.html',

   // headless : false,
    //baseURL: process.env.Prod === '1' ? 'https://www.mytheresa.com/int_en/men.html' : 'https://test.mytheresa.com/en-de/men.html' : 'https://staging.mytheresa.com/en-de/men.html': 'https://local.mytheresa.com/en-de/men.html',
   // viewport : {width: 720, height: 720},
    screenshot : 'on',
    trace : 'on',//off,on
    },
  },
  {
    name:'firefox',
use: {

  browserName : 'firefox',
  //headless : false,
 // viewport : {width: 720, height: 720},
  screenshot : 'on',
  trace : 'on',//off,on
  },
},
  {
    name:'webkit',
use: {

  browserName : 'webkit',
  //headless : false,
  screenshot : 'on',
  trace : 'on',//off,on
  },
}
]



};

module.exports = config;
