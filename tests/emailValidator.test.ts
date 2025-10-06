import { isValidEmail } from "../src/emailValidator";

describe("isValidEmail", () => {
  it("accepts common valid emails", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
    expect(isValidEmail("first.last@sub.domain.co")).toBe(true);
    expect(isValidEmail(" first.last@sub.domain.co ")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("no-at-symbol.com")).toBe(false);
    expect(isValidEmail("foo@bar")).toBe(false);
    expect(isValidEmail("foo@bar.")).toBe(false);
    expect(isValidEmail("foo@@bar.com")).toBe(false);
    expect(isValidEmail("spaces are@bad.com")).toBe(false);
  });

  it("handles non-string inputs defensively", () => {
    // @ts-expect-error intentional wrong type
    expect(isValidEmail(null)).toBe(false);
    // @ts-expect-error intentional wrong type
    expect(isValidEmail(undefined)).toBe(false);
  });
});
