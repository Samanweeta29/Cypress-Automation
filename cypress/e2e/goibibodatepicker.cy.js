describe('Goibibo Date Picker',()=>{
    before('Login Goibibo',()=>{
        cy.visit('https://www.goibibo.com/');
        cy.get('.logSprite.icClose').click();
        
    })

    it('Date Picker for Departure',()=>{
        cy.get('div.fswFld')  
        .contains('From')   
        .click();
        cy.get('input[type="text"]').wait(2000).type('BLR');
        cy.contains('Bengaluru International Airport').click();
        cy.wait(2000);
        cy.get('input[type="text"]').wait(2000).type('BOM');
        cy.get('.sc-12foipm-29.gEpyDY').first().click();

        // Define the dynamic values for day, month, year, and day number
        const day = 'Wed';   
        const dateNumber = 16;  
        const month = 'Oct';   
        const year = 2024;     

        // Construct the aria-label dynamically using the variables
        const ariaLabel = `${day} ${month} ${dateNumber} ${year}`;
        

        cy.get('div.fswFld')  
        .contains('Departure')   
        .click();
       cy.get('[aria-label="'+ ariaLabel+'"]').click();  

       cy.get('div.fswFld')  
        .contains('Travellers & Class')   
        .click();
        cy.contains('Done').click({force:true});

        cy.contains('SEARCH FLIGHTS').click();
    })

})