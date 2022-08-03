/// <reference types="cypress" />

it('shows the network connection error', () => {
  // intercept the GET /fruit call and
  // force a network error
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', {
    forceNetworkError: true,
  })

  // visit the site and before load spy on
  // the window.console.error method
  // and give the spy an alias "logError"
  // https://on.cypress.io/visit and https://on.cypress.io/spy
  cy.visit('/', {
    onBeforeLoad(win) {
      cy.spy(win.console, 'error').as('logError')
    },
  })
  // confirm the console.error spy was called
  // with the expected message
  // "error fetching fruit"
  cy.get('@logError').should(
    'have.been.calledWith',
    'error fetching fruit',
  )
  // confirm the page has an element with text "Failed to fetch"
  cy.contains('Failed to fetch').should('be.visible')
})
