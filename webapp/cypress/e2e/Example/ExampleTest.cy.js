describe('Should test if the element is on the screen', () => {
  it('"Projeto Rodando..." must be visible on the page', () => {
    cy.visit('/');
    cy.contains('body', /Projeto Rodando.../i).should('be.visible');
  });
});
