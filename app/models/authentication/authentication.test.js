const Authentication = require("./authentication");
const nakama = require("../../api/nakama/nakama");

describe("Authentication", () => {
  let authentication;

  beforeEach(() => {
    authentication = new Authentication();
  });

  test("authenticateEmail returns a Promise<ApiSession>", async () => {
    const email = "sample@email.com";
    const password = "password123";
  });
});
