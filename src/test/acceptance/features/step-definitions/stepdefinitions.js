const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I navigate to the endpoint "([^"]*)"$/, (url) => {
    browser.url(url);
  });

  this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });
}

