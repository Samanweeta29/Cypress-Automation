describe('Assertions Demo', () =>{
    it('Implicit Assertion', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('contain','orangehrm')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('include','orangehrmlive.com')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
        .and('not.contain','Green')

        cy.get('.orangehrm-login-branding').should('be.visible')
        .and('exist')
        cy.xpath('//a').should('have.length','5')

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should('have.value','Admin')
        cy.get("input[type='password']").type("admin123")
        cy.get("input[type='password']").should('have.value','admin123')
        cy.get("button[type='submit']").click()
        
    })

    it('Explicit Assertion', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        cy.get("input[name='username']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        let expName="manda user";
        let notexpName="user";
        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actName=x.text()
            //bdd assertions
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(notexpName)

            //tddassertions
            assert.equal(actName,expName)
            assert.notEqual(actName,notexpName)

        })
    })
})