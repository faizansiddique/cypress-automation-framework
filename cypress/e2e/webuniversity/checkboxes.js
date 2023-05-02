/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Verify Checkboxes', () => {
    beforeEach(() => {
        cy.navigateTo_webdriveruni_homepage()
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})      
    });

    it('Check and validate checkbox', () => {
     cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
     
     cy.get("input[value='option-1']").check().should('be.checked')

    }); 

    it('Validate option 3 is unchecked', () => {
     cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
     
     cy.get("input[value='option-3']").click()
    // cy.get("input[value='option-3']").check().should('not.be.checked')
     cy.get("input[value='option-3']").uncheck().should('not.be.checked')
    });

    it('Handling multiple checkboxes', () => {
     cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
     
     cy.get("input[type='checkbox']").check(['option-1', 'option-2','option-3', 'option-4']).should('be.checked')

     cy.get("input[type='checkbox']").uncheck(['option-1', 'option-2','option-3', 'option-4']).should('not.be.checked')
    });
 });