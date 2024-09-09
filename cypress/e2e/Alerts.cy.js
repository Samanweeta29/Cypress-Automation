
describe('Alerts', () =>{

    //normal alert
    it('Normal Alerts', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(1000)
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (t) =>{
            expect(t).to.contain('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    //confirmation alert
    it('confirmation Alerts', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(1000)
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (x) =>{
            expect(x).to.contain('I am a JS Confirm');
        })
        cy.on("window:confirm", () => false);
        cy.get("#result").should('have.text','You clicked: Cancel')
       
    })

    //Prompt Alert
    it('Prompt Alerts', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(1000)
        cy.window().then((win) =>{
            cy.stub(win,'prompt').returns('Welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get("#result").should('have.text','You clicked: Window')

    })

    //Authenticated Alert
    it.only('Authenticated Alerts', () =>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
        {username: "admin", password: "admin"}

        })
        cy.get("#content > div > p").should('have.contain','Congratulations')
})
})
