import { ElementTools } from "../utils/element.tools";

export class GridTools {
  /**
   * Clique sur le bouton d'un produit spécifique.
   * @param gridId - ID de la grille contenant les produits.
   * @param index - Index du produit cible.
   */
  public static clickOnProductByIndex(gridId: string, times: number ,index: number) {
    const product = ElementTools.getElementChild(gridId, index);
    const button = product.find("button");

    for (let i = 0; i < times; i++) {
      button.click();
    }
  }
}
