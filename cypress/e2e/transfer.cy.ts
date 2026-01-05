import { TransferPage } from "../pages/TransferPage";

describe("Money Transfer - cy.intercept", () => {
  const page = new TransferPage();

  beforeEach(() => page.visit());

  it("Test A: Success - 200 OK", () => {
    page.mockSuccess();
    page.triggerTransfer();
    page.wait().then((req) => {
      expect(req.response?.statusCode).to.equal(200);
    });
  });

  it("Test B: Failure - 400 Bad Request", () => {
    page.mockFailure();
    page.triggerTransfer();
    page.wait().then((req) => {
      expect(req.response?.statusCode).to.equal(400);
    });
  });
});
