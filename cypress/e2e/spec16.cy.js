/// <reference types="cypress" />

it('requests all fruits', () => {
  const fruits = new Set()

  function getTheFruit() {
    cy.request('GET', '/fruit')
      .its('body.fruit')
      .then((fruit) => {
        if (fruits.has(fruit)) {
          const list = [...fruits].sort()
          cy.log(list.join(', '))
        } else {
          fruits.add(fruit)
          cy.wait(500).then(getTheFruit)
        }
      })
  }
  getTheFruit()
})
