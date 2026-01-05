describe("SauceDemo", () => {
  it("should login, add product, and verify cart", () => {
    // 1. Login
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // 2. Add to cart
    cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click();

    // 3. Go to cart and verify
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("exist");
    cy.get(".inventory_item_name").should("contain", "Sauce Labs Backpack");

    // 4. Verify price format
    cy.get(".inventory_item_price")
      .invoke("text")
      .should("match", /\$\d+\./); //regex for $ and decimal point
  });
});
