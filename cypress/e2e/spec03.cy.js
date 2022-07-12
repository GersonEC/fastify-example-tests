/// <reference types="cypress" />

it('shows the fruit returned from the test - my solution', () => {
  // stub the network call the application makes
  // to the server using "GET /fruit"
  // return "Kiwi" json object
  // tip: use https://on.cypress.io/intercept
  //
  cy.intercept('GET', 'fruit', {
    fruit: 'Kiwi',
  }).as('fruit-stub')

  // visit the page
  // https://on.cypress.io/visit
  cy.visit('/')

  // wait for the app to make the network call
  // to make sure the stub was used
  // https://on.cypress.io/wait
  cy.wait('@fruit-stub')

  // confirm the application shows the fruit "Kiwi"
  // https://on.cypress.io/contains
  cy.get('#fruit').contains('Kiwi')
})

it('shows the fruit returned from the test', () => {
  // stub the network call the application makes
  // to the server using "GET /fruit"
  // return "Kiwi" json object
  const fruit = 'Kiwi'
  // tip: use https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { fruit }).as('fruit')
  // visit the page
  cy.visit('/')
  // wait for the app to make the network call
  // to make sure the stub was used
  cy.wait('@fruit')
  // confirm the application shows the fruit "Kiwi"
  cy.contains('#fruit', fruit)
})
