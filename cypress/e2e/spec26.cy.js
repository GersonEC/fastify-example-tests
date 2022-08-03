/// <reference types="cypress" />

it('makes multiple separate requests', () => {
  // make the first request to fetch the fruit
  // using https://on.cypress.io/request
  cy.request('/fruit').then((res) => {
    const fruit = res.body.fruit
    cy.request('/fruit').then((res) => {
      const fruit2 = res.body.fruit
      expect(fruit).to.not.deep.equal(fruit2)
    })
  })
})

it('store multiple responses as aliases', () => {
  // make the first request using https://on.cypress.io/request
  // and store its "body.fruit" value as alias "fruit1"
  // https://on.cypress.io/its and https://on.cypress.io/as
  cy.request('/fruit').its('body.fruit').as('fruit1')

  // make the second request and store the fruit as alias "fruit2"
  // use https://on.cypress.io/then command
  // with a "function () { ... }" callback
  // to be able to access both fruits using
  // "this.fruit1" and "this.fruit2" variables
  // and confirm they are different
  cy.request('/fruit')
    .its('body.fruit')
    .as('fruit2')
    .then(function () {
      expect(this.fruit1).to.not.deep.equal(this.fruit2)
    })
})
