import { findDuplicate } from "./arrayDuplicate";
describe("find duplicate", () => {
  it("should return something", () => {
    const result = findDuplicate([1, 2, 1]);
    expect(result).toBeDefined();
  });
  it("should return 1 if duplicate number is 1", () => {
    const result = findDuplicate([1, 2, 1]);
    console.log(result);
    expect(result).toStrictEqual([1]);
  });
});
