/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Upload File", () =>{
    it('Upload valid file and validate', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myFile').selectFile('cypress/fixtures/testng.txt')
        cy.get('#submit-button').click()
    });

    it('dont Upload file and validate', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#submit-button').click() 
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('You need to select a file to upload!')
        })
    });
})