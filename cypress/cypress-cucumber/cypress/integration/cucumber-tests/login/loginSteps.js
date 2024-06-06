import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('http://localhost:3000/')
})

When('I fill in the form', () => {
    cy.get('#name').clear({force: true}).type('testone123');
    cy.get('#password').clear({force: true}).type('blank123');
  });

When('I click the submit button', () => {
  cy.get('[data-testid=submit-button]').click();
});

Then('I should see a success message', () => {
  cy.get('[data-testid=success-message]').should('be.visible')
    .and('contain', 'Successfully!');
});