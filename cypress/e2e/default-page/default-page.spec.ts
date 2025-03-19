import { DefaultPage } from "../../pom/default.page";
import { UrlTools } from "../../support/utils/url.tools";

describe('Default Page testing', () => {

    beforeEach(() => {
       cy.login("qa", "testing");
    });
    
    
    it('should search for a product', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');

        DefaultPage.goToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });

    it('should search for a product 2', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');

        DefaultPage.goToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });

    it('should search for a product 3', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');

        DefaultPage.goToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });

    it('should search for a product 4', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');

        DefaultPage.goToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });

    it('should search for a product 5', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');

        DefaultPage.goToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });
    
});