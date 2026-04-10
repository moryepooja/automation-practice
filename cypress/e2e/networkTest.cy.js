describe("Network Intercept Test", () => {
  it("Intercept API call", () => {
    cy.visit("https://example.cypress.io/commands/network-requests");

    cy.intercept("GET", "**/comments/*").as("getComment");

    cy.contains("Get Comment").click();
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);

    cy.contains("Get Comment").click();
    cy.wait("@getComment").its("response.body").should("have.property", "id");
  });
});
