declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in as a user
       * @example cy.login()
       */
      login(username,password): Chainable<void>;
    }

    interface Chainable {
      /**
       * Custom command to log out as a user
       * @example cy.logout()
       */
      logout(): Chainable<void>;
    }
  }