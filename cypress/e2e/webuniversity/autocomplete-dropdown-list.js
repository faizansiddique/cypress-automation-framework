/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Verfiy auotcomplete dropdown list', () => {
    it('Select specific product from dropdown list', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            cy.log(prod)

            const productToSelect = 'Avacado'

            if(prod === productToSelect){
                //$el.click()
                $el.trigger('click')

                cy.get('#submit-button').click()
                cy.url().should('include', 'Avacado')
            }
            
        }).then(() =>{
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const prodToSel = 'Grapes'

                if(prod === prodToSel){
                    //$el.click()
                    $el.trigger('click')

                    cy.get('#submit-button').click()
                    cy.url().should('include', 'Grapes')
                }

            })
            
        })
    });     
 });