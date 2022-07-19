/// <reference types="cypress" />

// import the fixture JSON data from the file "../fixtures/apple.json"
import appleJson from '../fixtures/apple.json'

it('imports the fixture from JSON file', () => {
  // print the imported fruit to the Command Log
  // https://on.cypress.io/log
  cy.log(appleJson)

  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { fixture: 'apple.json' })

  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')

  // confirm the fruit from the fixture is shown on the page
  // https://on.cypress.io/contains
  cy.contains('#fruit', appleJson.fruit).should(
    'be.visible',
  )
})

it('imports the fixture from JSON file', () => {
  // print the imported fruit to the Command Log
  cy.log(`fruit: **${appleJson.fruit}**`)
  // intercept the GET call to /fruit with fixture "apple.json"
  cy.intercept('GET', '/fruit', { fixture: 'apple.json' })
  // visit the site
  cy.visit('/')
  // confirm the fruit from the fixture is shown on the page
  cy.contains('#fruit', appleJson.fruit)
})
