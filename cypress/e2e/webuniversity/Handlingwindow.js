/// <reference types="Cypress"/>

describe("Handling contact us page window ", ()=>{
    it("Should be able to submit the contact us form", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //cy.get('#contact-us > .thumbnail').click()
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Wick")
        cy.get('[name="email"]').type("johnwick1111@gmail.com")
        cy.get('textarea.feedback-input').type("Test")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should be able to perform To Do List activity", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()

        cy.get('#container > ul > li').as("listName")
        cy.get('@listName').each(($el, index, $list)=>{
            cy.log($el.text())
            var i
            for(i=0; i<$el.length; i++){
                cy.wrap($el).click()
            }
        })
    })

})