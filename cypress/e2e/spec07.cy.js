/// <reference types="cypress" />

it('uses the fixture to stub and check the page - my solution', () => {
  // load the data from the fixture file "apple.json"
  // using the command https://on.cypress.io/fixture
  cy.fixture('apple.json').as('fruit-fixtured')

  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', {
    fixture: 'apple.json',
  }).as('fruit-intercept')

  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')

  // confirm the fruit from the fixture is shown on the page
  // https://on.cypress.io/contains
  cy.contains('#fruit', 'apple').should('be.visible')
})

it('uses the fixture to stub and check the page', () => {
  // load the data from the fixture file "apple.json"
  cy.fixture('apple.json')
    .then(cy.log)
    .then((data) => {
      // using the command https://on.cypress.io/fixture
      cy.intercept('GET', '/fruit', {
        fixture: 'apple.json',
      })
      // intercept the GET call to /fruit with fixture "apple.json"
      // visit the site
      cy.visit('/')
      // confirm the fruit from the fixture is shown on the page
      cy.contains('#fruit', data.fruit).should('be.visible')
    })
})
