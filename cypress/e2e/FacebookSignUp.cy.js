describe('Facebook Sign-Up Form Automation', () => {
  
    // Before each test, visit the Facebook registration page
    beforeEach(() => {
      cy.visit('https://www.facebook.com/r.php?locale=en_GB&display=page');
      cy.get('.fcb > a').click();
      cy.get('[data-testid="open-registration-form-button"]').click();
    });
  
    it('fill the sign-up form', () => {
      cy.get('input[name="firstname"]').type('Samanweeta');
  
      cy.get('input[name="lastname"]').type('Mangal');
  
      cy.get('input[name="reg_email__"]').type('samanweeta23@gmail.com');
  
      cy.get('input[name="reg_passwd__"]').type('Test@123');
  
      cy.get('select[name="birthday_day"]').select('18');
  
      cy.get('select[name="birthday_month"]').select('Sep');
  
      cy.get('select[name="birthday_year"]').select('2024');
  
      cy.get('input[value="1"]').check(); 
  
      cy.get('button[name="websubmit"]').click();
  
        cy.url().should('include', 'https://www.facebook.com'); 
    });
  });
  