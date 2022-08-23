declare namespace Cypress {
    interface Chainable {
        loginMockUser(): Chainable<Element>;

        submitFeedback(name: string, email: string, subject: string, message: string): Chainable<Element>;
    }
}

Cypress.Commands.add('loginMockUser', () => {
    cy.visitHomepage();
    cy.get('#signin_button').click();

    cy.fixture('loginData').then(({ username, password }) => {
        cy.login(username, password);
    });
});

Cypress.Commands.add('submitFeedback', (name, email, subject, message) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#subject').type(subject);
    cy.get('#comment').type(message);
    cy.contains('Send Message').click();
});
