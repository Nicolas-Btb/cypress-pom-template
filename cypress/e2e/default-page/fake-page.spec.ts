

describe('Fake Page testing', () => {

    beforeEach(() => {
        cy.login("qa", "testing");
    });

    it('just wait for 5 seconds', () => {

        cy.wait(5000);
    });

    it('just wait for 3 seconds', () => {

        cy.wait(3000);
    });

    it('just wait for 2 seconds', () => {

        cy.wait(2000);
    });

});