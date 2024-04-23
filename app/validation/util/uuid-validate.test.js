const { validateUuid } = require("uuid-validator");

describe("UUID Validator", () => {
  test("Valid UUID", () => {
    const validUuid = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
    expect(validateUuid(validUuid)).toBe(true);
  });
});
