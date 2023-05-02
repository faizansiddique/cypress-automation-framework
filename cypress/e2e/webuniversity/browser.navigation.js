/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Validate WebDriverUni homepage links", () =>{
    it('Confirm links redirect to the correct pages', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'https://webdriveruniversity.com/')
        //cy.reload(true) // reload without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus') 

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    });
})