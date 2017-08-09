const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I navigate to the endpoint "([^"]*)"$/, (url) => {
    browser.url(url);
  });

  this.Then(/^I see the label "([^"]*)" for (.*)$/, (label, elementSelector) => {
    expect(browser.getText('#' + elementSelector + '-label')).to.be.eql(label);
  });

  this.Then(/^I see a value equal to the (.*)$/, (field) => {
    expect(browser.getText('#' + field + '-value')).to.match(/^[0-9]*.[0-9]{2}$/)
  });

};
