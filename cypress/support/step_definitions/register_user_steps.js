

Given('I launch the browser and Navigate to url {string}',(url)=>{
    cy.visit(url);
});

Then('Verify that home page is visible successfully',()=>{
    cy.url().should('eq','https://automationexercise.com/');
});

When ('I Click on "Signup | Login" button',()=>{
    cy.contains('Signup / Login').click();
});
Then ('Verify "New User Signup!" is visible',()=>{
cy.get('.signup-form > h2').should('have.text','New User Signup!');
});

When('Enter name and email address',()=>{
    cy.fixture('registerpage').then((data)=>{
        cy.get('input[name="name"]').clear().type(data.name);
        cy.get('input[name="email"]').filter('input[data-qa="signup-email"]').clear().type(data.email);
    })
    
});

