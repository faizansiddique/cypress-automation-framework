/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Handling iframes and modals', () => {
   it('Handle WebDriverUni iframes and modals', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('include', 'IFrame')
    
    cy.get('#frame').then((iframe) =>{
        const body = iframe.contents().find('body')
        cy.wrap(body).as('iframe')
    })

    cy.get('@iframe').find('#button-find-out-more').click()

    cy.get('@iframe').find('#myModal').as('modal')

    cy.get('@modal').should((expectedText) =>{
        const text = expectedText.text()
        expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
    })

    cy.get('@modal').contains('Close').click()
   }); 
});