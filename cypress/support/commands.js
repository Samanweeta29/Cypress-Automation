// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress" />
///<reference types="Cypress-xpath" />
Cypress.Commands.add('getIframe', (iframe) =>{
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

import 'cypress-iframe';
// or
require('cypress-iframe');
import 'cypress-shadow-dom';
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';

// Custom command for Trello login
Cypress.Commands.add('trelloLogin', (credentials) => {
    // Visit Trello and initiate login
    cy.visit('https://trello.com/');
    cy.contains('Log in').click();
    
    // Handle the cross-origin login for Atlassian using cy.origin
    cy.origin('https://id.atlassian.com', { args: { credentials } }, ({ credentials }) => {
        cy.get('input[type="email"]').type(credentials.email);
        cy.contains('Continue').click();
        cy.wait(2000);
        cy.get('#password').type(credentials.password);
        cy.get('#login-submit').click();
        cy.wait(2000);  
    });
});

// Custom command for selecting a dropdown option
Cypress.Commands.add('selectDropdown', (dropdownSelector, optionText) => {
    cy.get(dropdownSelector).select(optionText); 
});
Cypress.Commands.add('optionDropdown', (dropdownSelector, optionText) => {
    cy.get(dropdownSelector).click(); // Open the dropdown
    cy.contains(optionText).click();  // Select the option based on visible text
  });