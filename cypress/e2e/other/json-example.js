/// <reference types="cypress" />
/// <reference types="@cypress/xpath"/>

describe("Json Object", () =>{
    it("Json Object Examples", () =>{
        const exampleObject = {"key1": "Harry", "key2": "Potter" }

        const exampleArrayOfValue = ["Batman", "Spiderman", "Aquaman"]

        const examplearrayOfObject = [{"key1": "Bruce Wayne"}, {"key2": "Rasal Gul"}, {"key3": "Peter Parker" }]

        const users = {
            firstName: "Faizan",
            lastName: "Siddique",
            age: 35,
            Students: [
                {
                    firstName: "Ramish",
                    lastName: "Aman",
                },
                {
                    firstName: "Salman",
                    lastName: "Qureshi",
                }
            ]
        }

        cy.log(exampleObject.key1) //Harry
        cy.log(exampleObject.key2) //Potter 

        cy.log(exampleObject["key1"]) //Harry
        cy.log(exampleObject["key2"]) //Potter

        cy.log(exampleArrayOfValue[0]) //Batman
        cy.log(exampleArrayOfValue[1]) //spiderman
        cy.log(exampleArrayOfValue[2]) //Aquaman

        cy.log(users.firstName) //Faizan
        cy.log(users.Students[0].firstName) //Ramish
        cy.log(users.Students[1].lastName) //Qureshi

        cy.log(examplearrayOfObject[0].key1)
        cy.log(examplearrayOfObject[1].key2)
        cy.log(examplearrayOfObject[2].key3)


    })

    
})  