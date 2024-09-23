describe('Handling iframes', () =>{
    it('iframes', () =>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
       let iframe= cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome").type('{selectall}');
        cy.get("[aria-label='Bold']").click();
    })

    it('iframes Approach2', () =>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("Welcome").type('{selectall}');
        cy.get("[aria-label='Bold']").click();
    })

    it.only('iframes Approach3=Cypress Plugin', () =>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Welcome");
    })
})