import { findDuplicate } from "./arrayDuplicate";
describe("find duplicate", () => {
  it("should return something", () => {
    const result = findDuplicate([1, 2, 1]);
    expect(result).toBeDefined();
  });
  it("should return 1 if duplicate number is 1", () => {
    const result = findDuplicate([1, 2, 1]);
    expect(result).toStrictEqual([1]);
  });
  it("should return correct duplicate number", () => {
    const result = findDuplicate([1, 2, 3, 4, 5, 7, 8, 9, 10, 5]);
    expect(result).toEqual([5]);
  });
  it("should return multiple correct duplicate numbers", () => {
    const result = findDuplicate([1, 2, 3, 4, 2, 5, 7, 8, 9, 10, 5]);
    expect(result).toEqual([2, 5]);
  });
  it("should return correct duplicate number when array is not ordered", () => {
    const result = findDuplicate([9, 6, 1, 2, 3, 7, 8, 10, 1, 4]);
    expect(result).toEqual([1]);
  });
});
