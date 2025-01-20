import { ElementTools } from "../utils/element.tools";

/**
 * Tools for interacting with input components
 *
 * @export
 * @class InputTools
 */
export class InputTools {
    /**
     * Types into an input by its id
     *
     * @static
     * @param {string} id
     * @param {string} text
     * @memberof InputTools
     */
    public static typeInputById(id: string, text: string) {
        ElementTools.getElementById(id).type(text);
    }
}