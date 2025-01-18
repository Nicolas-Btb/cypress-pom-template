import { DefaultPage } from "../../pom/default.page";
import { UrlTools } from "../../support/utils/url.tools";

describe('Default Page testing', () => {
    
    
    it('search for a product', () => {
        DefaultPage.searchForProduct('Mens');
        DefaultPage.countSearchResults(4);
        DefaultPage.clickOnSearchedProductByProductId(2);
        //example if you don't know the product id
        //DefaultPage.clickOnSearchedProductByProductName('Mens Cotton Jacket');
        UrlTools.checkUrlInclude('product/3');
        DefaultPage.navigatoToHome();
        UrlTools.checkUrlInclude('http://localhost:5173/');        
    });
    
});