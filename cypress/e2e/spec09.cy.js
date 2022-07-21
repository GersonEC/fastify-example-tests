/// <reference types="cypress" />

it('returns different fruits', () => {
  // stub the /fruit endpoint to return "apple" on the first visit
  // stub the /fruit endpoint to return "grapes" on the second visit
  // https://on.cypress.io/intercept with "times: *" option
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1,
    },
    {
      fruit: 'grapes',
    },
  )
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1,
    },
    {
      fruit: 'apple',
    },
  )
  // visit the site
  cy.visit('/')
  // confirm it shows "apple"
  cy.contains('#fruit', 'apple').should('be.visible')

  // reload the site
  cy.reload()
  // confirm it shows "grapes"
  cy.contains('#fruit', 'grapes').should('be.visible')
})

it('returns different fruits', () => {
  // stub the /fruit endpoint to return "apple" on the first visit
  // stub the /fruit endpoint to return "grapes" on the second visit
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1,
    },
    { fruit: 'grapes' },
  )
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1,
    },
    { fruit: 'apple' },
  )

  // visit the site
  cy.visit('/')
  // confirm it shows "apple"
  cy.contains('#fruit', 'apple').should('be.visible')
  // reload the site
  cy.reload()
  // confirm it shows "grapes"
  cy.contains('#fruit', 'grapes').should('be.visible')
})
