describe('Trello Automation', () => {
    let credentials;
    before(() => {
        // Load credentials from fixture.
        cy.fixture('trellocredentials').then((creds) => {
            credentials = creds;
        });
    });
    beforeEach('login',() => {
        // Login to Trello
        cy.visit('https://trello.com/');
        cy.contains('Log in').click();
        cy.origin('https://id.atlassian.com', { args: { credentials } }, ({ credentials }) => {

            cy.get('input[type="email"]').type(credentials.email);
            cy.contains('Continue').click();
            cy.get('#password').type(credentials.password);
            cy.get('#login-submit').click();
            cy.wait(2000);
        });

    })

    it('Create a new board ',()=>{
        const boardName = 'Test Board'
        cy.get('.board-tile.mod-add').scrollIntoView().click();
        cy.get('input[data-testid="create-board-title-input"]').type(boardName +'{enter}');
        // cy.get('button[data-testid="create-board-submit-button"]')
        // .scrollIntoView()
        // .should('be.visible')
        // .click();
        
        cy.wait(4000);
        //cy.contains('Add a list').click();
        cy.get('.oe8RymzptORQ7h').type('List A');
        cy.contains('Add list').click();
        //cy.contains('Add another list').click();
        cy.get('.oe8RymzptORQ7h').type('List B');
        cy.contains('Add list').click();
        cy.contains('Add a card').click();
        cy.get('.qJv26NWQGVKzI9').type('Card A');
        cy.get('button[data-testid="list-add-card-button"]').click();
        //drag Card A to List B via plugin
        cy.contains('Card A').drag('textarea[aria-label="List B"]', { force: true });
    })

})