/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Handling Data", () =>{

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#data-table').scrollIntoView().invoke('removeAttr', 'target').click({force:true})        
    });

    it('Calculate and assert the total age of the users', () => {
        var userDetails = []
        let num = 0
        cy.get('#thumbnail-1 td').each(($ele, index, $list) =>{
            userDetails[index] = $ele.text()
        }).then(() =>{
            var i;
            for(i=0; i< userDetails.length; i++){
                if(Number(userDetails[i])){
                    num += Number(userDetails[i])
                }
                //cy.log(userDetails[i])
            }
            cy.log('Total age :: '+num)
            expect(num).to.eq(322)
        })
    });

    it.only('Calculate and assert age of the user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) =>{
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) =>{
                    const userage = age.text()
                    expect(userage).to.equal('80')
                })
            }
        })
    });
})