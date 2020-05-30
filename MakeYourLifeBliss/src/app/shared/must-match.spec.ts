import { MustMatch } from "./must-match";

describe("MustMatch", () => {
  it("should create an instance", () => {
    expect(MustMatch("controlName", "matchingControlName")).toBeTruthy();
  });
});
