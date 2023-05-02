/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Cypress Web Security", () =>{
    it("Validate visiting two different domains", () =>{
        cy.visit('https://google.com/')
        cy.visit('https://apple.com/')
    })

    it("Validate visiting two different domains via user actions", () =>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

})  