describe('Automate For File Upload',()=>{
    before('visit franklin website',()=>{
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');
        cy.get('h1').should('have.text','File Upload Test');
    })

    it('File Upload',()=>{
        const fileName = 'image (12).png'; 
        cy.get('input[name="userfile"]').attachFile(fileName);
        cy.get('input[name="userfile"]').then((input) => {
            const fileList = input[0].files;
            expect(fileList.length).to.equal(1); 
            expect(fileList[0].name).to.equal(fileName); 
          });
    })
})