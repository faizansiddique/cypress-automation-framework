/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Handling Js Alerts', () => {
    it('Confirm js alert contains the correct text', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button1').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am an alert box!')
        })
    });

    it('Validate js confirm alert box works correctly when clicking ok', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) =>{
            return true
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Validate js confirm alert box works correctly when clicking cancel', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) =>{
            return false
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
    
    it('Validate js confirm alert box using a stub', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        
        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true
        }).then(() =>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    });

    it.only('Validate Modal pop up', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button2').click()

        cy.get('#myModal').as('modal')
        
        cy.get('@modal').should((expectedText) =>{
            const text = expectedText.text()
            expect(text).to.include('We can inject and use JavaScript code')
        })

        cy.get('@modal').contains('Close').click()
    });
});