describe('GlobalSQ Window Handling and Ifarmes',{ tags: '@disperz' },()=>{
    before(()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/');
    })

    it('open new tab',()=>{
        cy.get('a[target="_blank"]').contains('Click Here')  
            .should('be.visible')                             
            .should('exist')                                   
            .invoke('removeAttr', 'target')                    
            .wait(1000)                                        
            .click();     
    })

    it('open new window',()=>{
        cy.get('[id="Open New Window"]').click();
        cy.get('.information.closable').should('contain','Click below button to open a new window now');
        cy.wait(2000);
        cy.get('a[target="_blank"]').get('.resp-tab-content-active > .button')  
            .should('be.visible')                             
            .should('exist')                                   
            .invoke('removeAttr', 'target')                    
            .wait(1000)                                        
            .click();     
    })

    it('open iFrame via custom command',()=>{
        cy.get('#iFrame.resp-tab-item').click();
        cy.getIframeBody('[class=" lazyloaded"]')
        .find('.page_heading')
        .contains('Trainings')
        .should('have.text','Trainings');
          
    })
})