import { ElementTools } from "./element.tools";

/**
 * Tools for interacting with click
 *
 * @export
 * @class ClickTools
 */
export class ClickTools {
  /**
   * Clicks an element by its attribute name and his value
   *
   * @static
   * @param {string} attribute
   * @param {string} value
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ClickTools
   */
  public static clickByAttribute(attribute: string, value: string) {
    ElementTools.getElementByAttribute(attribute, value).click();
  }

  /**
   * Clicks an element by its CSS selector type and his value
   *
   * @static
   * @param {string} selector
   * @param {string} value
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ClickTools
   */
  public static clickBySelectorAndText(selector: string, value: string) {
    ElementTools.getElementBySelector(selector,value).click(); // Cherche le lien avec le texte donné
  }

  /**
   * Clicks an element by its ID
   *
   * @static
   * @param {string} id
   * @return {*}  {Cypress.Chainable<JQuery<HTMLElement>>}
   * @memberof ClickTools
   */
  public static clickById(id: string){
    ElementTools.getElementById(id).click();
  }
}
