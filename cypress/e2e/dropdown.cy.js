describe('dropdown types',()=>{

    it.skip('dropdown static',()=>
        {
            cy.visit('https://formstone.it/components/dropdown/demo/')
            cy.get('#demo_basic-dropdown-selected').click()
            cy.get('#demo_basic-dropdown > .fs-dropdown-options > .fs-scrollbar-content > [data-value="2"]').click()
            cy.get('#demo_basic-dropdown > .fs-dropdown-options > .fs-scrollbar-content > [data-value="2"]').should('have.text','Two')
        })

    it.skip('dropdown cover',()=>{
        cy.visit('https://formstone.it/components/dropdown/demo/')
        cy.get('#demo_cover-dropdown-selected').click()
        cy.get('#demo_cover-dropdown>.fs-dropdown-options>.fs-scrollbar-content>[data-value="4"]').click()
        cy.get('#demo_cover-dropdown>.fs-dropdown-options>.fs-scrollbar-content>[data-value="4"]').should('have.text','Four')
    })

    it.skip('dropdown select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Guam')
        .should('have.value','Guam')

        cy.get('.zfields-element.selling_mode').select('No, but I currently sell offline')
        .should('have.value','No, but I currently sell offline')
    })

    it.skip('dropdown doesnot have select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Jamaica').type('{enter}')

    })
    it('Dropdown auto suggest',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#search-input').type('Harry Potter')
        cy.wait(1000)
        cy.get('.suggestion-title').contains('Harry Potter (film series)').click()

    })

})