describe('Get the hash in URL ',()=>{
    it('Get the hash in URL',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Internet#Terminology.')
        cy.hash().then((hash)=>{
            cy.log(hash);
        })
    })
})