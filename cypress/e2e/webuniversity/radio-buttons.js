/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Verify Radio button", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");
  });
  
  it("Check specific radio button", () => {
    // To clikc on first radio button
    //cy.get('#radio-buttons').find("[type='radio']").first().check()

    // To select radio button using index
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("Validate the states of specific radio button", () => {
    // To validate the radio is checked or not
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");

    // To check radio button is disbaled
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
