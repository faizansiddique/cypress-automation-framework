/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("alias and invoke", ()=>{
    it("Validate specific hair care product", () =>{
        cy.visit('https://automationteststore.com/')

        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed')
    });

    it("Validate no of product on Homepage", () =>{
        cy.visit('https://automationteststore.com/')

        cy.get('.fixed_wrapper .prdocutname').as('products')
        cy.get('@products').should('have.length', 16)
    })

    it("Validate product cart and title add to cart is present", () =>{
        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').as('productDetails')
        cy.get('@productDetails').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only("Calculate Standard product non sale items on homepage", () =>{
        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').as('productDetails')
        // cy.get('@productDetails').find('.oneprice').each(($el, index, $list) =>{
        //     cy.log($el.text())
        // })
        
        cy.get('@productDetails').find('.oneprice').invoke('text').as('itemPrice')
        var totalPrice = 0
        cy.get('@itemPrice').then((linkText)=>{
            var totalItemPrice = 0
            var itemPrice = linkText.split('$')
            var i
            for(i = 0; i < itemPrice.length; i++){
                //cy.log(itemPrice[i])
                totalItemPrice += Number(itemPrice[i])
            }
            totalPrice += totalItemPrice
            cy.log("Total non sale items price :: "+totalPrice)
        })

        cy.get('@productDetails').find('.pricenew').invoke('text').as('saleItemPrice')
        cy.get('@saleItemPrice').then((linkText) =>{
            var totalSalePrice = 0
            var saleItemPrice = linkText.split('$')
            var i
            for(i = 0; i < saleItemPrice.length; i++){
                //cy.log(saleItemPrice[i])
                totalSalePrice += Number(saleItemPrice[i])
            }
            cy.log("Total sale items price :: "+totalSalePrice)
            totalPrice += totalSalePrice
            
        }).then(() =>{
            cy.log("Total Items Price :: "+totalPrice)
            expect(totalPrice).to.equal(639.49)
        })

        
        
    })

})