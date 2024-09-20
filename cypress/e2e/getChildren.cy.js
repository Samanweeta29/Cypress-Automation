describe('Get the children ',()=>{
    it('Login to SwagLab ',()=>{
        cy.visit("https://automationexercise.com/products");
        //cy.get('input[type="email"]').filter('[data-qa="login-email"]').type('abc.com');
        //cy.focused().should('have.attr','name','email');
        //cy.contains('Signup / Login').click();
        //cy.hash().then((hash) => {
            // Print the hash value to the Cypress Command Log
            //cy.log('The URL hash is: ' + hash);
        //})
    cy.get('.nav.navbar-nav').find('li').its('length').should('eq',8);
    })
})