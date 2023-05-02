class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }

    clickOn_ContactUS_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
    }

}
export default HomePage_PO;