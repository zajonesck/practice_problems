import { findMissingNumber } from "./missingNumber";
describe("missingNumber", () => {
  it("should return something", () => {
    const result = findMissingNumber([1, 2, 4]);
    expect(result).toBeDefined();
  });
  it("should return find missing number", () => {
    const result = findMissingNumber([1, 2, 4]);
    expect(result).toStrictEqual([3]);
  });
  it("should return find missing numbers", () => {
    const result = findMissingNumber([1, 2, 4, 6]);
    expect(result).toStrictEqual([3, 5]);
  });
  it("should return find missing number out of order", () => {
    const result = findMissingNumber([6, 3, 2, 4, 1]);
    expect(result).toStrictEqual([5]);
  });
  it("should return find missing numbers out of order", () => {
    const result = findMissingNumber([6, 3, 2, 4, 1, 8]);
    expect(result).toStrictEqual([5, 7]);
  });
});
