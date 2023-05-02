/// <reference types="Cypress"/>
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

describe("Test Contact Us page", ()=>{

    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        cy.fixture('contactData').then((data) =>{
            globalThis.data = data
        })
    });

    beforeEach(() => {
        //cy.visit(Cypress.env("webdriveruni_homepage")+'/Contact-Us/contactus.html')
        homepage_PO.visitHomePage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUS_Button();
        //cy.pause();
    });
    

    it("Should be able to submit the contact us form", () =>{
        
        //cy.get('#contact-us > .thumbnail').click()
        //cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type(data.feedback)
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        //cy.webDriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.feedback, 'h1', 'Thank You for your Message!')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.feedback, 'h1', 'Thank You for your Message!');
        
    });

    it("Should be able to reset the contact us form", () =>{
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Wick")
        cy.get('[name="email"]').type("johnwick1111@gmail.com")
        cy.get('textarea.feedback-input').type("Test")
        cy.get('[type="reset"]').click()
    });

    it("Should not be able to submit contact us form if email field is blank", ()=>{
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type("Jonny")
        cy.get('[name="last_name"]').type("Hardy")
        cy.get('textarea.feedback-input').type("Test")
        cy.get('[type="submit"]').click()
        cy.get('body').should('have.text', '\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
        cy.get('body').contains('Error: all fields are required')
    })
});