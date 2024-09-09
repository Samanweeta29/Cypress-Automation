

describe('Login into Adda52 poker website', () =>{
    it('Login into Add52 website via password', ()=>{
        cy.visit("https://turn.adda52poker.com/poker2qa/lobby/cash-games?")
        cy.url().should('eq','https://turn.adda52poker.com/poker2qa/lobby/cash-games?game_variant=holdem')
        cy.get("#header-loginsignup-btn").click()
        cy.wait(2000)
        cy.get("div.login-rhs-password").contains('Login via Password').click()
        cy.get("div[class='fs20 grey800 ft-primary-b']").should('have.text','Login via Password')
        cy.get("#loginviapassword-username-input").clear().type('Saman10')
        cy.wait(1000)
        cy.get('#loginviapassword-password-input').clear().type('Test1234')
        cy.get('#loginviapassword-login-btn').click()
        cy.wait(3000)
        cy.get("li[routerlink='/lobby/cash-games']").should('have.text','Cash Games')
        cy.wait(3000)
        // Click on the first row of the Room view
        cy.get('table[aria-label="Favorite Table"] tbody tr').first().click();
        cy.wait(2000)
        // Click on the first row of the table view
        cy.get('.table2-body-container tr:first-child').click();
        cy.wait(1000)
        cy.get('button#lobby-cash-tableDetails-join-btn').click();
        




    })
})