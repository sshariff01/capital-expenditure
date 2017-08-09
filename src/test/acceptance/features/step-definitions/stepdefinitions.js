const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I navigate to the endpoint "([^"]*)"$/, (url) => {
    browser.url(url);
  });

  this.Then(/^I see the label "([^"]*)" for (.*)$/, (expectedLabel, elementSelector) => {
    var actuallabel = browser.getText('#' + elementSelector + '-label');
    expect(actuallabel).to.be.eql(expectedLabel);
  });

  this.Then(/^I see a value equal to the (.*)$/, (field) => {
    var valueOfField = browser.getText('#' + field + '-value');
    expect(valueOfField).to.match(/^[0-9]*.[0-9]{2}$/, "Value for " + field + " is not a number")
  });

};
