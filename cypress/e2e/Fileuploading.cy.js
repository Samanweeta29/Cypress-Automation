import('cypress-file-upload')
describe('File Uploading',()=>{
   it('Single File upload',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('image (12).png');
    cy.get('#file-submit').click();
    cy.get('.example>h3').should('have.text','File Uploaded!');
   })
})