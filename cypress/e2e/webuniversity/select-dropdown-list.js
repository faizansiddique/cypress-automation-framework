/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Interact with dropdown list', () => {
    it('Select specific values via select dropdown list', () => {
     cy.visit('https://webdriveruniversity.com/')
     cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
     cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
     
     cy.get('#dropdowm-menu-1').select('python')
     cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
     cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript')

     cy.get('#dropdowm-menu-1').invoke('text').as('value')
     cy.get('@value').then((values) =>{
        cy.log(values)
     })

    });     
 });