describe('Selenium Automation Prctice',()=>{
    before(() => {
        // Visit the registration page before the tests
        cy.visit('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    });
    it('Student Registration Form',()=>{

        // Fill in firstname and email
                    cy.get('input[placeholder="First Name"]').should('be.enabled');
                    cy.get('input[placeholder="First Name"]').type('Samanweeta');
                    cy.get('input[placeholder="First Name"]').should('have.value', 'Samanweeta');
                    cy.get('input[placeholder="First Name"]').should('be.visible');
                    cy.get('input[placeholder="name@example.com"]').type('samanweeta23@gmail.com');
                    cy.get('input[placeholder="name@example.com"]').should('have.value', 'samanweeta23@gmail.com');
        // Select gender (Male/Female)
                    cy.contains('label', 'Female').prev('input[type="radio"]').check();
                    cy.contains('label', 'Female').prev('input[type="radio"]').should('be.checked');
        //Mobile(10 Digits)
                    cy.get('input[name="mobile"]').type('7789079878');
                    cy.get('input[name="mobile"]').should('have.value', '7789079878');
        //Date of Birth:
                    cy.get('#dob').type('1991-01-29');
                    cy.get('#dob').should('have.value', '1991-01-29');
                    cy.get('#subjects').type('cypress');
                    cy.get('#subjects').should('have.value', 'cypress');
        //select Hobbies
                    cy.contains('label', 'Reading').prev('input[type="checkbox"]').check();
                    cy.contains('label', 'Reading').prev('input[type="checkbox"]').should('be.checked');
        //upload picture
                    cy.get('input[type="file"]').attachFile('image (12).png');

        //Current Address:
        cy.get('.col-sm-9 > #picture').type('Nallurahalli,Whitefield,Bangalore');
        cy.get('.col-sm-9 > #picture').should('have.value', 'Nallurahalli,Whitefield,Bangalore');
        cy.get('#state').should('be.visible')
        cy.get('#state').select('Rajasthan').should('have.value', 'Rajasthan');
        cy.get('#city').select('Agra').should('have.value', 'Agra');
        //click Login
        cy.get('input[type="submit"]').click();
        
    })
})
