/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Iterate over elements", ()=>{
    beforeEach(function() {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });
    it("Log Information of all hair care products", () =>{
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{
            cy.log("Index: "+ index +" : "+ $el.text())
        })
    });

    it("Add Specific product to basket", () =>{
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{
            
        //     if($el.text().includes('Pantene Pro-V Conditioner')){
        //         cy.wrap($el).click()
        //     }
        // })
        cy.selectProduct('Pantene Pro-V Conditioner')

    });

    it("Add another Specific product to basket", () =>{
        cy.selectProduct('Seaweed Conditioner')

    });

})