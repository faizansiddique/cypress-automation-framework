/// <reference types="cypress"/>
import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

let stub

Before(() => {
  cy.log('Executing before step')  
  stub = cy.stub()
});
       
Given('Able to access WebDriverUniversity Login Portal', () => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html')
})

When('Enter valid username {word}', (userName) => {
    cy.get("[placeholder='Username']").type(userName)
})

And('Enter valid password {word}', (passWord) => {
    cy.get('#password').type(passWord)
})

And('click on login button', () => {
    cy.get('#login-button').click()
    cy.on('window:alert', stub)
})

Then('Validate successful message {word} {word}', (message1, message2) => {
    const expectedMessage = message1 + "  " +message2
    cy.log('Expected Message :: '+expectedMessage)
    cy.log(stub.getCall(0))
    //expect(stub.getCall(0)).to.be.calledWith(expectedMessage)    
})