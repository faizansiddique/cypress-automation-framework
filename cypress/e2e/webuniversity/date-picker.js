/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Test Datepicker", () =>{
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').scrollIntoView().invoke('removeAttr', 'target').click({force:true})        
    });

    it('Select date from the date picker', () => {
        // let date = new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate())

        // let date2 = new Date()
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate())
        cy.get('#datepicker').click()
        var date = new Date()
        date.setDate(date.getDate() + 1)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString('default', {month: 'long'})
        var futureDay = date.getDate()

        cy.log('Future Year :: '+futureYear)
        cy.log('Future Month :: '+futureMonth)
        cy.log('Future Day :: '+futureDay)      
        
        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() =>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) =>{
                    if(currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectfutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear()
        selectfutureDay()
    });
})