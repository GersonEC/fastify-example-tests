// make sure the IntelliSense works in this JavaScript spec file
/// <reference types="Cypress" />

it('shows some fruit', () => {
  cy.visit('/')
  cy.get('#fruit')
    .should('not.contain.text', 'loading...')
    .invoke('text')
    .should('match', /^[A-Z][a-z]+$/)
  cy.contains('#fruit', /^[A-Z][a-z]+$/)
})
