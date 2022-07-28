/// <reference types="cypress" />

it('modifies the JSON responses', () => {
  // intercept the JSON request to "/fruit"
  let fruit2x = null
  cy.intercept('GET', '/fruit', (req) => {
    req.continue((res) => {
      fruit2x = res.body.fruit =
        res.body.fruit + res.body.fruit
    })
  }).as('fruit')
  // take the fruit sent by the server and change it,
  // for example by concatenating it with itself
  // store the fruit in a variable "fruit2x"
  // visit the page and confirm the network call was made
  cy.visit('/')
  cy.wait('@fruit').then(() => {
    cy.contains('#fruit', fruit2x)
  })
  // confirm the page contains the "fruit2x" text
  // tip: you need to use "cy.then" to access the variable
  // after you have waited for the network call to complete
})
