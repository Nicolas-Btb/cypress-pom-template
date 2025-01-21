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
   * @param {string} id - The ID of the parent element
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementById(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-cy="${id}"]`);
  }

  /**
   * Gets all children of an element
   *
   * @static
   * @param {string} id - The ID of the parent element
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getAllElementsChildren(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElementById(id).children();
  }

  /**
 * Gets a specific child element of a parent by its index position
 *
 * @static
 * @param {string} id - The ID of the parent element
 * @param {number} childIndex - The zero-based index of the child to retrieve
 * @return {*} 
 * @memberof ElementTools
 */
public static getChildByIndex(id: string, childIndex: number): Cypress.Chainable<JQuery<HTMLElement>> {
  return this.getElementById(id).children().eq(childIndex);
}


  /**
   * Counts the children of an element
   *
   * @static
   * @param {string} id - The ID of the parent element
   * @param {number} expectedCount
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static shouldMatchChildrenCount(id: string, expectedCount: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElementById(id).children().should("have.length", expectedCount);
  }

  /**
   * Gets the parent of an element
   *
   * @static
   * @param {string} id - The ID of the parent element
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
   * @param {string} id - The ID of the parent element
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
   * @param {string} attributeName
   * @param {string} attributeValue
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementByAttribute(attributeName: string, attributeValue: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[${attributeName}="${attributeValue}"]`);
  }

  /**
   * Gets an element by its css selector
   *
   * @static
   * @param {string} selectorName
   * @param {string} selectorValue
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ElementTools
   */
  public static getElementBySelector(selectorName: string, selectorValue: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains(selectorName, selectorValue);
  }
}
