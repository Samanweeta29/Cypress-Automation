describe('Read menu.json file', () => {
    it('Should read and verify menu items from JSON file', () => {
      // Read the file from cypress/fixtures folder
      cy.readFile('cypress/fixtures/menufile.json').then((data) => {
        // Check that the file has the expected structure and data
        expect(data).to.have.property('menuItems');
        expect(data.menuItems).to.have.length(3);
  
        // Verify the first menu item
        expect(data.menuItems[0]).to.deep.equal({
          name: "Home",
          link: "/"
        });
  
        // Log the menu items to Cypress console for debugging
        cy.log(JSON.stringify(data.menuItems));
      });
    });
  });
  