/// <reference types="cypress" />

it('simulates the error status code', () => {
  // intercept the GET /fruit call and
  // return a response with status code 404
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', {
    statusCode: 404,
  })
  // visit the site
  cy.visit('/')

  // confirm the page has an element with text "HTTP error 404"
  cy.contains('HTTP error 404').should('be.visible')
})
