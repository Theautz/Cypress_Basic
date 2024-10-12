// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe("template spec", () => {
//   it("Does not do much!", () => {
//     const sum = 1 + 1;
//     expect(2).to.equal(sum);
//   });
// });

describe("template spec", () => {
  before(() => {
    cy.log("working before all script");
  });
  beforeEach(() => {
    cy.log("working before run Test1, Test2");
  });
  it("Test1", () => {
    const sum = 1 + 1;
    expect(2).to.equal(sum);
  });
  it("Test2", () => {
    const sum = 2 + 2;
    expect(4).to.equal(sum);
  });
  afterEach(() => {
    cy.log("working after run Test1, Test2");
  });
  after(() => {
    cy.log("working after all script done");
  });
});
