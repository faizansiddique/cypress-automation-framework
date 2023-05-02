/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Inspect Automation test store items using chain of commands", ()=>{
    it("Click on the first item using item header", () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        
    });

    it("Click on the first item using item text", () =>{
        cy.visit('https://automationteststore.com/')
        //cy.xpath("(//a[@title='Skinsheen Bronzer Stick'])[1]").click()
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((productName)=>{
            console.log("Product name :: "+productName.text())
            cy.log("Product name :: "+productName.text())
        })

    });

    it("Click on the first item using index", () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
});