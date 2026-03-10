describe('Action commands', () => {

    it('Type into input field', () => {
  
      cy.visit('https://example.cypress.io/commands/actions')
  
      cy.get('.action-email')
        .type('pooja@test.com')
        .should('have.value', 'pooja@test.com')
  
    })
  });