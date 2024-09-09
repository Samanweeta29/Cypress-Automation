describe('Handling iframes examples', () =>{
    it('iframes one body', () =>{
        cy.visit('https://practice-automation.com/iframes/')
        
        const iframe=cy.get('#frame2')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.click()
        cy.get('[aria-label="Search"]').click()
        
    })

    it.only('using iframe plugin',()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.frameLoaded('#singleframe');
        cy.iframe('#singleframe')
        .get('[aria-label="Search"]').click()
    })
})