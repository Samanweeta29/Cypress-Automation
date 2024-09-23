describe("practice Shadow DOM",()=>{
    it("practice Shadow DOM",()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('.jackPart').shadow().find('#app2').shadow().find('#pizza').type('Margereta');
    })
})