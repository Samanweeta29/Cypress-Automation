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
        cy.trelloLogin(credentials);

    })

    it('select board category dropdown ',()=>{
        //select Boards from LHS opetions
        cy.get('.rVz43wK3rQUlj3 >li').contains('Boards').click();
        cy.optionDropdown('.yMPj1pPmPFjeI1.css-573cd-control','Education');
        cy.get('h2').should('contain','Suggested education templates');
    })

})