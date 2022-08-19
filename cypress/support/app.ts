declare namespace Cypress {
    interface Chainable {
        /**
         * Navigates to the home page of our application
         */
        visitHomepage(): Chainable<Element>;
    }
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('/index.html');
});
