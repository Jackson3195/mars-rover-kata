import { sum } from "src/example";

describe("Sum", () => {
  it("should add correctly", () => {
    const result = sum(2, 2);
    expect(result).toEqual(4);
  });
});
