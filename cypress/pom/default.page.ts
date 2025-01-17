/// <reference types="cypress" />

import { ButtonTools } from "../support/pcom/button.tools";
import { InputTools } from "../support/pcom/input.tools";

/**
 * Default page class, contains all the elements and actions that can be performed from all pages
 * like header, footer, etc.
 *
 * @export
 * @class DefaultPage
 */
export class DefaultPage {
  private static readonly ID_BUTTON_HOME = 'module_nav_button_home';
  private static readonly ID_BUTTON_CART = 'module_nav_button_cart';
  private static readonly ID_INPUT_SEARCH = 'module_search_input_search';

  /**
   * Navigates to the home page
   *
   * @static
   * @memberof DefaultPage
   */
  public static navigatoToHome() {
    ButtonTools.clickButtonById(this.ID_BUTTON_HOME);
  }

  /**
   * Navigates to the cart page
   *
   * @static
   * @memberof DefaultPage
   */
  public static navigatoToCart() {
    ButtonTools.clickButtonById(this.ID_BUTTON_CART);
    cy.url().should('include', '/cart');
  }

  /**
   * Search for a product
   *
   * @static
   * @param {string} productName
   * @memberof DefaultPage
   */
  public static searchForProduct(productName: string) {
    InputTools.typeInputById(this.ID_INPUT_SEARCH, productName);
  }
  
}