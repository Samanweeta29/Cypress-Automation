describe('Practice API',()=>{

    it('GET Method',()=>{

    cy.visit('https://trello.com/');
    cy.request({
        method: 'GET',
        url: "https://trello.com/"
    })
    .then((response)=>{
        cy.log(response);
    })
    }
    )
})