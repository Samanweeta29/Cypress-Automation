describe('practice Document Object',()=>{
    it('Should verify document title and manipulate DOM',()=>{
        cy.visit('https://automationexercise.com');
        var docmsg='';
        cy.document().its('title').then((msg)=>{
        
         docmsg=msg;
        
        })
        cy.log(docmsg);
        cy.document().its('title').should('eq', 'Automation Exercise');
        cy.get('.features_items>.title.text-center').should('have.text','Features Items');
        cy.document().then((doc) => {
            doc.querySelector('.features_items>.title.text-center').textContent = 'Features Collections';
        });
    })
})