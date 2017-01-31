
Feature('Yahoo.com');

Scenario('test something', (I) => {
  I.amOnPage('http://yahoo.com');
  I.fillField('p', 'github nightmare');
  I.click('Search Web');
  I.waitForElement('#main');
  I.seeElement('#main .searchCenterMiddle li a');
  I.seeElement("//a[contains(@href,'github.com/segmentio/nightmare')]");
  I.see('segmentio/nightmare','#main li a');
});
