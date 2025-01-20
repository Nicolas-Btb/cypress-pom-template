import { DefaultPage } from "../../pom/default.page";
import { HomePage } from "../../pom/home.page";

describe('Checkout Process', () => {

    beforeEach(() => {
        cy.login("qa", "testing");
    });

    it('should add and remove products to cart and control the total price', () => {

        HomePage.chooseProducts(5, 2);
        DefaultPage.goToCart();
        
        //#region complete for training
        //CartPage.checkTotalPrice(xxx,xx€);
        //DefaultPage.goToHome();
        //HomePage.chooseProducts(2, 3);
        //DefaultPage.goToCart();
        //CartPage.removeProducts(y,y);
        //CartPage.checkTotalPrice(xxx,xx€);
        //#endregion       
        
    });

    it('should consult a product and add it to the cart', () => {

        //#region complete for training
        //HomePage.consultProduct(2);
        //UrlTools.checkUrlInclude('product/2');
        //ProductPage.checkProductInformation(aaa,aaa,aaa);
        //ProductPage.addProductToCart(4);
        //DefaultPage.goToCart();
        //CartPage.checkTotalPrice(xxx,xx€);
        //#endregion

    });

});