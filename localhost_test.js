Feature('localhost');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('hello world');
});
