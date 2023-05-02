/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe('Test Mouse action', () => {
    it('scroll element into view', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });     

    it('Should be able to drag and drop items', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#draggable').trigger('mousedown', {which: 1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it('Should be able to perform double click', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick()
    });

    it('Should be able to hold down left mouse click button on given element', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which:1}).then((element) => {
            expect(element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    });
 });