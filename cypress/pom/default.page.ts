import { ButtonTools } from "../support/pcom/button.tools";
import { ClickTools } from "../support/utils/click.tools";
import { InputTools } from "../support/pcom/input.tools";
import { ElementTools } from "../support/utils/element.tools";

/**
 * Default page class, contains all the elements and actions that can be performed from all pages
 * like header, footer, etc.
 *
 * @export
 * @class DefaultPage
 */
export class DefaultPage {
  
  private static readonly ID_BUTTON_HOME = "module_nav_button_home";
  private static readonly ID_BUTTON_CART = "module_nav_button_cart";
  private static readonly ID_INPUT_SEARCH = "module_search_input_search";
  private static readonly ID_DROPDOWN_LIST = "module_search_dropdown-list";
  private static readonly ID_DROPDOWN_LINK = "module_search_dropdown-link-";

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
    cy.url().should("include", "/cart");
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

  public static clickOnSearchedProductByProductId(Index: number) {
    ClickTools.clickById(this.ID_DROPDOWN_LINK + Index);
  }

  //#region example if you don't have data-cy on the elements
  /**
   * Clicks on a searched product by is name
   *
   * @static
   * @param {string} productName
   * @memberof DefaultPage
   */
  public static clickOnSearchedProductByProductName(productName: string) {
    ClickTools.clickBySelectorAndText("a", productName);
  }
  //#endregion

  /**
   * Counts the search results
   *
   * @static
   * @param {number} expectedCount
   * @memberof DefaultPage
   */
  public static countSearchResults(expectedCount: number) {     
      ElementTools.getChildrenCount(this.ID_DROPDOWN_LIST, expectedCount);
  }
}
