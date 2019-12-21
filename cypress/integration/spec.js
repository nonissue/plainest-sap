describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h2>", () => {
    cy.contains("h2", "Collate.js");
  });

  it("navigates to /about", () => {
    cy.get("nav a")
      .contains("about")
      .click()
      .should("have.class", "selected");
    cy.url().should("include", "/about");
  });

  it("navigates to /blog", () => {
    cy.get("nav a")
      .contains("blog")
      .click()
      .should("have.class", "selected");
    cy.url().should("include", "/blog");
  });

  it("navigates to /author", () => {
    cy.get("nav a")
      .contains("authors")
      .click()
      .should("have.class", "selected");
    cy.url().should("include", "/author");

    cy.get("li
  });
});
