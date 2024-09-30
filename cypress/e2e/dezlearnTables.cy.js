describe('Automate WebTables',()=>{
    before('visit URL',()=>{
        cy.visit('https://www.dezlearn.com/webtable-example/');
        cy.get('.tg').should('be.visible');
    })

    it('Automate WebTable',()=>{
        cy.get('.tg tbody tr').each(($row, index) => {
            if (index > 0) { // Skip the header
              cy.wrap($row).within(() => {
                cy.get('td').eq(0).invoke('text').then((name) => {
                  cy.log('Name:', name);
                });
                cy.get('td').eq(1).invoke('text').then((email) => {
                  cy.log('Email:', email);
                });
              });
            }
          });

          cy.get('.tg tbody tr').eq(1).within(() => {
            cy.get('td').eq(2).find('input[type="checkbox"]').check(); // Check the "Standard" checkbox
            cy.get('td').eq(4).find('select').select('Sedan'); // Select "Sedan" from dropdown
          });
    })
})