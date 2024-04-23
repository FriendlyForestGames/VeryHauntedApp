const { validateUuid } = require("../util/uuid-validator");

describe("UUID Validator", () => {
  test("Valid UUID", () => {
    const validUuid = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
    expect(validateUuid(validUuid)).toBe(true);
  });

  test("Invalid UUID", () => {
    const invalidUuid = "not-a-valid-uuid";
    expect(validateUuid(invalidUuid)).toBe(false);
  });
});
