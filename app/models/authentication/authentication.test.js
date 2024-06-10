const Authentication = require("./authentication");
const nakama = require("../../api/nakama/nakama");

jest.mock("../../api/nakama/nakama", () => ({
  getInstance: jest.fn().mockReturnValue({
    authenticateEmail: jest.fn((email, password) =>
      Promise.resolve({ email, token: "fake-token" })
    ),
  }),
}));

describe("Authentication", () => {
  let authentication;

  beforeEach(() => {
    authentication = new Authentication();
  });

  test("authenticateEmail returns a Promise<ApiSession>", async () => {
    const email = "sample@email.com";
    const password = "password123";

    const session = await authentication.authenticateEmail(email, password);

    expect(session).toEqual(
      expect.objectContaining({
        email: expect.any(String),
        password: expect.any(String),
      })
    );
  });
});
