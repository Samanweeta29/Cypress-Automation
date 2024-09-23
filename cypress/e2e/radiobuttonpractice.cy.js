describe('radiobutton practice',()=>{
    it('Select Radiobutton Practice',()=>{
        cy.visit('https://automationexercise.com/signup');
        cy.get('[placeholder="Name"]').clear().type('Samanweeta');
        cy.get('[data-qa="signup-email"]').clear().type('samanweeta23@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').should('not.be.checked');
        cy.get('#id_gender2').check().should('be.checked');
        cy.get('.form-control#name').should('have.value','Samanweeta');
        cy.get('.form-control#email').should('have.value','samanweeta23@gmail.com');
        cy.get('.form-control#password').type('Test@1234');
        cy.get('.form-control#days').select('29').should('have.value','29');
        cy.get('.form-control#months').select('January').should('have.value','January');

    })

    it('Dynamic Dropdown',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-reasondummy-container').click();
        cy.get('.select2-search__field').type('Visa extension{enter}');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Korea{enter}');
        cy.get('#select2-billing_country-container').should('have.attr','title','North Korea');

    })

    it('Auto suggestions drpdown',()=>{
        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').type('kdrama 2020');
        cy.get('[aria-label="kdrama 2020"]').click();
    })

    it('Alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert');
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok');
    })

    it('Alerts cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',(t)=> false);
        cy.get('#result').should('have.text','You clicked: Cancel');
    })

    it.only('Alerts input box',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        var inputText='Hello';
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(inputText);
        })
        cy.contains('Click for JS Prompt').click();
        cy.on('window:confirm',(t)=> false);
        cy.get('#result').should('have.text','You entered: '+inputText );
    })
})