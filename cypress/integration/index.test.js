
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    expect(cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')).to.be.true
  })

  it('go into Pokemon page', () => {
    cy.get('[href="/pokemon/ivysaur"]').click({ force: true })
    expect(cy.contains(/chlorophyll/i)).to.be.true
  })
})