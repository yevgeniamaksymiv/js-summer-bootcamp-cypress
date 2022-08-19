describe('Demo Test', () => {
    it('Should open login page', () => {
        cy.visit('/index.html');
        cy.get('#signin_button').should('be.visible');
    });
});
