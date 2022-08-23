declare namespace Cypress {
    interface Chainable {
        /**
         * Navigates to the home page of our application
         */
        visitHomepage(): Chainable<Element>;

        login(username: string, password: string): Chainable<Element>;
    }
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('/index.html');
});

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.contains('Sign in').click();

    it('should navigate to account summary page', () => {
        cy.url().should('contain', '/account-summary.html');
    });
});
