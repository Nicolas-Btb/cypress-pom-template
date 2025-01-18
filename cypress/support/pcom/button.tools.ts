import { ElementTools } from "../utils/element.tools";

/**
 * Tools for interacting with button components
 *
 * @export
 * @class ButtonTools
 */
export class ButtonTools {
    /**
     * Clicks a button by its id
     *
     * @static
     * @param {string} id
     * @memberof ButtonTools
     */
    public static clickButtonById(id: string) {
        ElementTools.getElementById(id).click();
    }
}