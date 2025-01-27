import { GridTools } from "../support/pcom/grid.tools";
import { ElementTools } from "../support/utils/element.tools";

/**
 * Home page class, contains all the elements and actions that can be performed from the home page
 *
 * @export
 * @class HomePage
 */
export class HomePage {
  private static readonly ID_GRID_PRODUCTS = "module_home_grid_product-list";

  /**
   * Chooses a specific number of products from the home page
   *
   * @static
   * @param {number} productIndex
   * @param {number} numberOfProducts
   * @memberof HomePage
   */
  public static chooseProducts(productIndex: number, numberOfProducts: number) {
    GridTools.clickOnProductByIndex(this.ID_GRID_PRODUCTS, numberOfProducts, productIndex - 1);
  }
}
