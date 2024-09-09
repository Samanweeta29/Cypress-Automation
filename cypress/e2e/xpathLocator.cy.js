
describe('Xpath Locators', () =>{
    
    it('Shop xpath', () =>{
        
        cy.visit("https://practice.automationtesting.in/")
        cy.xpath("//div[@class='woocommerce']").should('have.length',3)
    })

})