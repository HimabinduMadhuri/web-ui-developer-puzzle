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

  it('Then: Removing from reading list snackbar undo should re-add the book', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-item"]').should("have.length.greaterThan",0);
    cy.get('[data-testing="remove-book-from-list-button"]').first().click();
    cy.wait(1000);
    cy.get('.mat-snack-bar-container .mat-focus-indicator.mat-button.mat-button-base').last().click();
    cy.get('[data-testing="reading-list-item"]').should("have.length.greaterThan",0);
  });
});
