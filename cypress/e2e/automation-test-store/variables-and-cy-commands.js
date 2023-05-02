/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Variables and Cypress examples ", ()=>{
    it("Clicking on Makeup and skincare link using variables", () =>{
        cy.visit('https://automationteststore.com/')

        // These are not recommended approach
        // const makeupLnk = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skinCareLnk = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skinCareLnk.click()
        // makeupLnk.click()
        
        // const makeupLnk = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLnk.click()
        // const skinCareLnk = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skinCareLnk.click()

        // Recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    });

    it("Navigate to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // Following code will fail
        // const header = cy.get(".maintext")
        // cy.log(header.text())

        cy.get(".maintext").then((header) =>{
            const headerTxt = header.text()
            cy.log("header :: "+headerTxt)
            expect(headerTxt).is.eq('Makeup')
        })
    });

    it("Validate properties of the Contact Us page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        
        //Uses cypress commands and chainning
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
        
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const emailTxt = text.find('#field_12').text()
            cy.log('email found :: '+emailTxt)
            expect(emailTxt).to.contain('Email:')
        })

        //Embedded commands (Closure)
        cy.get('#field_13').then(text => {
            cy.log(text.text())
            cy.log(text)
        })
    })

});