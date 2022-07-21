/// <reference types="cypress" />

it('shows the loading element with Promise.delay', () => {
  // set up an intercept to spy on the GET /fruit endpoint
  // but delay the request by 2 seconds using
  // Cypress.Promise.delay(2000) and the response function
  // hint: see https://on.cypress.io/intercept and
  // the response callback function
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
    },
    (req) => {
      return Cypress.Promise.delay(2000)
    },
  ).as('fruit-delayed')

  // visit the site
  cy.visit('/')

  // make sure the loading element is visible
  cy.contains('#fruit', 'loading...').should('be.visible')

  // from the request spy, get the response body
  // and confirm the fruit returned by the server is visible
  cy.wait('@fruit-delayed')
    .its('response.body.fruit')
    .then(cy.log)
    .then((fruit) => {
      cy.contains('#fruit', fruit).should('be.visible')
    })
})

it('shows the loading element with Promise.delay', () => {
  // set up an intercept to spy on the GET /fruit endpoint
  // but delay the request by 2 seconds using
  // Cypress.Promise.delay(200) and the response function
  // hint: see https://on.cypress.io/intercept and
  // the response callback function
  cy.intercept('GET', '/fruit', (req) => {
    return Cypress.Promise.delay(2000)
  }).as('fruit')
  // visit the site
  cy.visit('/')
  // make sure the loading element is visible
  cy.contains('#fruit', 'loading...').should('be.visible')
  // from the request spy, get the response body
  // and confirm the fruit returned by the server is visible
  cy.wait('@fruit')
    .its('response.body.fruit')
    .then(cy.log)
    .then((fruit) => {
      cy.contains('#fruit', fruit).should('be.visible')
    })
})
