describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://movies-rinkiyakedad.demo.okteto.dev', { failOnStatusCode: false })
    // cy.contains('Rent').click({ force: true })
    cy.get('.Cart__total-price').invoke('text').should('not.match', /$0.00/)
  })
})