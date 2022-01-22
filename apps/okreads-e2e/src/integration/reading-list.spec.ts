describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: If i mark finished i should see finished flag', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-item"]').should('have.length.greaterThan',0);
    cy.get('[data-testing="finished-button"]').click();
    cy.get('[data-testing="finished-string-indicator"]').should("exist");  
    cy.get('[data-testing="finished-date-string"]').should("exist");  

  });
});
