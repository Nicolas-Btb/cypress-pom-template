/*
* This file is used to regroup all hooks or configuration that should be applied to all e2e tests.
* It is automatically loaded by Cypress when running e2e tests.
* It's like a setup file or a before each for all e2e tests. 
*/

/*
* It works with imports
*/
import './commands';

// You can use it with before and after hooks too, useful for setting up the environment and datas before running the tests

/*
* By this way, after all tests, the user will be logged out
* I advise you to avoid using before hooks for login,
* because we generally prefer to keep the possibility to choose the account we will use for testing
*/
afterEach(() => {
    cy.logout();
});