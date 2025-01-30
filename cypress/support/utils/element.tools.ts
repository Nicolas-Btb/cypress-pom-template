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
 * @param {number} [index] (optional) The index of the element to return
 * @return {Cypress.Chainable<JQuery<HTMLElement>>}
 * @memberof ElementTools
 * @example
 * getElementByAttribute('class', 'card-title') will return all elements with the class 'card-title'
 * getElementByAttribute('class', 'card-title', 0) will return only the first element with the class 'card-title'
 */
  public static getElementByAttribute(attributeName: string, attributeValue: string, index?: number): Cypress.Chainable<JQuery<HTMLElement>> {
    const elements = cy.get(`[${attributeName}="${attributeValue}"]`);

    if (index !== undefined) {
      return elements.eq(index);
    }

    return elements;
  }

  /**
   * Gets an element by its CSS selector
   *
   * @static
   * @param {string} selectorName
   * @param {string} selectorValue
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>} 
   *
   * @example
   * // Example 1: Find an element with a class and a specific value
   * ElementTools.getElementBySelector('.class', 'pa-2');
   * ElementTools.getElementBySelector('.btn', 'Login');
   *
   * // Example 2: Find an element by tag
   * ElementTools.getElementBySelector('button', 'Submit');
   *
   * // Note: If multiple elements match the criteria, only the first match will be returned.
   * // If no element is found, the test will fail.
   */
  public static getElementBySelector(selectorName: string, selectorValue: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains(selectorName, selectorValue);
  }
}
