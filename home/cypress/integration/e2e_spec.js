describe("My First E2E Test", () => {
    it("Should add an item to the cart", () => {
      cy.visit("http://localhost:3000/");
      cy.get("#showlogin").click();
      cy.get("#loginBtn").click();
      cy.get("#showCart").click();
      cy.get("#clearcart").click();
      cy.get("#addtocart_1").click();
      cy.get("#cart").click();
      cy.get("#grand_total").should("contain", "$5.99");
    });
  });