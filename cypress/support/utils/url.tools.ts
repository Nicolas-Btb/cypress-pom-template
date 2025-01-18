/**
 * Tools for interacting with URL
 *
 * @export
 * @class UrlTools
 */
export class UrlTools {
    
    /**
     * Check if the current URL includes the given path
     *
     * @static
     * @param {string} path
     * @memberof UrlTools
     */
    public static checkUrlInclude(path: string) {
        cy.url().should('include', path);
    }
}