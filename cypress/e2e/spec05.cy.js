/// <reference types="cypress" />

it('shows a different fruit after reloading the page - my solution', () => {
  // visit the site using https://on.cypress.io/visit
  // grab the fruit name from the page
  // (make sure it is not "loading...")
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')

  cy.wait('@fruit')
    .its('response.body.fruit')
    .then(cy.log)
    .then((fruit) => {
      const firstFruit = fruit
      cy.reload()
      cy.wait('@fruit')
      cy.get('#fruit').should('not.have.text', firstFruit)
    })
})

it('shows a different fruit after reloading the page', () => {
  // visit the site using https://on.cypress.io/visit
  cy.visit('/')
  // grab the fruit name from the page
  // (make sure it is not "loading...")
  cy.get('#fruit')
    .should('not.include.text', 'loading')
    .invoke('text')
    .then(cy.log)
    .then((fruit) => {
      // reload the page using https://on.cypress.io/reload
      cy.reload()
      // grab the fruit name from the page again
      // confirm the fruit name is different
      cy.get('#fruit')
        .should('not.include.text', 'loading')
        .and('not.have.text', fruit)
    })
})
