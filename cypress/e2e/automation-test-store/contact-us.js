/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Test Contact Us page", ()=>{
    before(() => {
        cy.viewport(550,750)
        cy.fixture('userDetails').as('user')
    });
    it("Should be able to submit the contact us form", 
    // {
    //     retries:{
    //         runMode: 3,
    //         openMode:2
    //     }
    // },
     () =>{
        cy.visit('https://automationteststore.com/')
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('@user').then((user) =>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
            
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Test")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });

    it("get the name of contact-us", ()=>{
        cy.visit('https://automationteststore.com/')
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.xpath("//a[contains(@href, 'contact')]").click().then((contactUs)=>{
            console.log("text:: "+contactUs.text())
            cy.log("text:: "+contactUs.text())
        })
    })
});