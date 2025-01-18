/**
 * Tools for interacting with elements in general
 *
 * @export
 * @class ElementTools
 */
export class ElementTools {

  /**
   * Gets an element by its id with data-cy
   *
   * @static
   * @param {string} id
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementById(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-cy="${id}"]`);
  }

  /**
   * Counts the children of an element
   *
   * @static
   * @param {string} id
   * @param {number} expectedCount
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getChildrenCount(id: string, expectedCount: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElementById(id).children().should("have.length", expectedCount);
  }

  /**
   * Gets the parent of an element
   *
   * @static
   * @param {string} id
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementParent(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElementById(id).parent();
  }

  /**
   * Gets the siblings of an element
   *
   * @static
   * @param {string} id
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementSiblings(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElementById(id).siblings();
  }

  /**
   * Gets an element by its attribute
   *
   * @static
   * @param {string} attribute
   * @param {string} value
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementByAttribute(attribute: string, value: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[${attribute}="${value}"]`);
  }

  /**
   * Gets an element by its css selector
   *
   * @static
   * @param {string} selector
   * @param {string} value
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementBySelector(selector: string, value: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains(selector, value);
  }
}
