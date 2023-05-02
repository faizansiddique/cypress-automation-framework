/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Add Multiple Items to Basket", ()=>{
    before(() => {
        cy.fixture('products').then(function(data) {
            globalThis.data = data
        })
    });

    beforeEach(function() {
        //cy.clearAllLocalStorage()
        //cy.clearCookie()
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });

    it("Add specific items to basket", () =>{
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() =>{
                debugger
            })
        })

        cy.get('.dropdown-toggle > .fa').click().debug()

        // cy.get('.table-striped > tbody > tr > td >a >img').each(($el, index, $list) =>{

        //     var i
        //     for(i=0; i<$el.length+1; i++){
        //         cy.get('.btn-sm > .fa').eq(index).click()
        //     }
        // })
    });

})