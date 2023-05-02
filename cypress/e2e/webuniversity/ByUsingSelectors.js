/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>

describe("Contact Us Selector Example using webdriveruni", ()=>{
    it("Selector Exmaple", ()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //By tag name
        cy.get("input")

        //By attribute name and value
        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //By 2 different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //By xpath
        cy.xpath("//input[@name='last_name']")

        // cy.xpath("//input[@name='first_name']").type("Hamza")
        // cy.xpath("//input[@name='last_name']").type("Ansari")
        // cy.xpath("//input[@name='email']").type("hamza.ansari@yahoomail.com")
        // cy.xpath("//textarea[@name='message']").type("Text area to test")
        // cy.get('[type="submit"]').click()
    })
})

