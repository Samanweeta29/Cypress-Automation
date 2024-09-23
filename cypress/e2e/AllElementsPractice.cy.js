/// <reference types="Cypress"/>

describe('All Elements Practice',() =>{

    /*it('Radiobuttons', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[value='radio1']").should('be.visible')
        .and ('not.be.checked')

        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio2']").should('not.be.checked')
        cy.get("input[value='radio3']").should('not.be.checked')

})*/
    /*it('Checkboxes', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.get("input[type='checkbox']").first().check().should('not.be.checked')
    })*/

    /*it('Dropdowns Select', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.get("#dropdown-class-example").select('option1').should('have.value','option1')
    })*/

    /*it('Dropdowns without Select', () =>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/") 
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
    })*/

    /*it('Auto Suggest Dropdown', () =>{
        cy.visit("https://www.wikipedia.org/") 
        cy.get("input[name='search']").type('Delhi')
        cy.get(".suggestion-link").contains('Capitals').click()
    })*/

    it('Google Auto Suggest Dropdown', () =>{

        cy.visit("https://www.google.com/")
        cy.get("textarea[class='gLFyf']").type('Cypress Automation',{force: true})
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length','13')
        cy.get("div.wM6W7d>span").each( ($el, index, $list) =>{
            if($el.text()=='cypress automation')
                {
                    cy.wrap($el).click()
                }
               
        })
        cy.get("textarea[value='cypress automation']").should('have.value','cypress automation')
    })

    })
