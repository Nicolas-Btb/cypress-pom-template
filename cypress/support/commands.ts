/*
 * Here you can define your own custom commands
 */

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.visit("/");
  cy.url().should("include", "/login");
  cy.get('[data-cy="module_login_input_username"]').type(username);
  cy.get('[data-cy="module_login_input_password"]').type(password);
  cy.get('[data-cy="module_login_button_submit"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.get('[data-cy="module_nav_button_logout"]').click();
  cy.url().should("include", "/login");
});
