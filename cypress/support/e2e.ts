/*
* This file is used to regroup all hooks or configuration that should be applied to all e2e tests.
* It is automatically loaded by Cypress when running e2e tests.
* It's like a setup file or a before each for all e2e tests. 
*/

/*
* Whit this before each, we are going to the home page before each test
* By this way, we are sure that all tests are starting from the same point
* We can use it to login, navigate to a specific page, etc.
*/
beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });