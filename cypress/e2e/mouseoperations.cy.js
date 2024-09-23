import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operations', ()=>{
    it.skip ('Mousehover',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('ul.nav.navbar-nav>li:nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');
        cy.get('ul.nav.navbar-nav>li:nth-child(1)>.nav-link.dropdown-toggle').trigger('mouseover').click();
        cy.get('ul.nav.navbar-nav>li:nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');
    });

    it.skip('Right click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
       
       //Approach 1
        /*cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible')*/

        //Approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible')

    })

    it.skip('Double click', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        

        //Approach1
        cy.get('[ondblclick="myFunction1()"]').trigger('dblclick');

        cy.get('#field2').should('have.value','Hello World!');
    });

    it.skip('Drag and drop click', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#draggable').drag('#droppable',{force:true});
    });

    it('scroll page', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[class="title"]').contains('Resizable').scrollIntoView({duration:2000});
    });
})