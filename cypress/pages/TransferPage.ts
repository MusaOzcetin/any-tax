export class TransferPage {
  visit() {
    cy.visit("https://example.com");
  }

  triggerTransfer() {
    cy.window().then((win) => {
      (win as any).fetch("/api/transfer", { method: "POST" });
    });
  }

  mockSuccess() {
    cy.intercept("POST", "/api/transfer", {
      statusCode: 200,
      body: { status: "success", transactionId: "12345" },
    }).as("transfer");
  }

  mockFailure() {
    cy.intercept("POST", "/api/transfer", {
      statusCode: 400,
      body: { error: "Insufficient funds" },
    }).as("transfer");
  }

  wait() {
    return cy.wait("@transfer");
  }
}
