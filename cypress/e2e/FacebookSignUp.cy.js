describe('Facebook Sign-Up Form Automation', () => {
  
    // Before each test, visit the Facebook registration page
    it('go to Facebook page',() => {
      cy.visit('https://www.facebook.com/r.php?locale=en_GB&display=page');
      cy.get('.fcb > a').click();
      cy.get('[data-testid="open-registration-form-button"]').click();
      cy.wait(2000);
      cy.get('input[name="firstname"]').type('Samanweeta');
      cy.get('input[name="lastname"]').type('Mangal');
      cy.get('input[name="reg_email__"]').type('samanweeta.mangal@joshsoftware.com');
      cy.get('input[name="reg_passwd__"]').type('Test@12345');
      cy.get('#day').select('29');
      cy.get('#month').select('Jan');
      cy.get('#year').select('1991');
      cy.contains("Female").click();
      cy.contains("Sign Up").click({force:true});

    });
})