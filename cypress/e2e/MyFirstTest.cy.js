
describe('My First Test', () =>{
    it('Verify Title Positive', () =>{
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })
    it('Verify Title Negative', () =>{
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM12')
        
    })
})