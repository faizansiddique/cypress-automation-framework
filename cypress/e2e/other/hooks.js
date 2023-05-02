describe("Hooks", () => {
  before(() => {
    cy.log('before')
  });

  after(() => {
    cy.log('after')
  });

  beforeEach(() => {
    cy.log('before each')
  });

  afterEach(() => {
    cy.log('after each')
  });

  it('Example test 1', () => {
    cy.log('example 1')
  });

  it('Example test 2', () => {
    cy.log('example 2')
  });
});
