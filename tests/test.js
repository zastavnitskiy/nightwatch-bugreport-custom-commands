/**
 * 
 * This test is calling a page objects command called metaSayHello, defined in page-objects/app.js
 * 
 */
module.exports = {
    'Demo test' : function (browser) {
      const page = browser.page.app();
      page
        .navigate()
        .waitForElementVisible('body')
        .metaSayHello()
        .end();
    }
  };