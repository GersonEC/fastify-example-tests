/// <reference types="cypress" />

it('shows the fruit returned by the server - my solution', () => {
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.wait('@fruit').then(({ response }) => {
    const fruit = response.body.fruit
    cy.contains('#fruit', fruit)
  })
})

it('shows the fruit returned by the server', () => {
  // spy on the network call the application makes
  // tip: use https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit').as('fruit')
  // visit the page
  cy.visit('/')
  // wait for the app to make the network call
  // (there might be a delay)
  cy.wait('@fruit')
    .its('response.body.fruit')
    .then(cy.log)
    .then((fruit) => {
      cy.contains('#fruit', fruit)
    })
  // from the network call, get the response body
  // and the name of the fruit and confirm
  // the fruit is shown on the page
})
