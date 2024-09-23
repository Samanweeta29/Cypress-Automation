describe('Google Search Autosuggestion Test', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com');
    });
  
    it('select an autosuggestion from Google search dropdown', () => {
      const searchQuery = 'Cypress testing';
  
      cy.get('#APjFqb')
        .type(searchQuery)
        .should('have.value', searchQuery); 
  
      cy.wait(500); 
  
         cy.get('ul.G43f7e>li')
        .first() 
        .click(); 
  
      cy.url().should('include', 'search?q=cypress+testing');
      cy.get('#search').should('exist'); // Check if search results are displayed
    });
  });
  