describe('Goibibo Website Testing', () => {
  
    // log text one time before the starting all tests 
    before(() => {
      cy.log('This runs once before all tests');
     
    });
  
    // go to the website before each test as session will expire for each test
    beforeEach(() => {
      cy.visit('https://www.goibibo.com/');
      cy.log('Visiting Goibibo before each test');
    });
  
    // Run this log once after each individual test 
    afterEach(() => {
      cy.log('This runs after each test');
    });
  
    // Run this log once after all tests are completed
    after(() => {
      cy.log('This runs once after all tests');
    });
  
    it('load and validate the Goibibo homepage', () => {
      cy.url().should('include', 'goibibo.com');
      cy.get('title').should('contain', 'Goibibo'); 
    });
  
    it('should navigate to flights section', () => {
      cy.contains('Flights').click({force: true});
      cy.url().should('include', 'flights');
      cy.get('h2').should('contain', 'Book Domestic and International Flight Tickets');
    });
  
    it('should search for hotels in Mumbai', () => {
      cy.contains('Hotels').click({force: true} );
      cy.url().should('include', 'hotels');
      cy.get('input[data-testid="home-autosuggest-input"]').type('Mumbai{downarrow}{enter}');
      cy.contains('Search').click();
      cy.url().should('include', 'hotels');
      cy.get('p').should('contain', 'Popular Locations in Mumbai');
    });
  
  
  });