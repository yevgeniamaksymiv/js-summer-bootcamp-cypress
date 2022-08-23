
describe('Feedback page', () => {
    before(() => {
        cy.visit('/feedback.html');
    });

    it('should autofill feedback page', () => {
        cy.fixture('feedback').then(({ name, email, subject, message }) => {
            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#subject').type(subject);
            cy.get('#comment').type(message);

            cy.contains('Send Message').click();
        });
    });
});
