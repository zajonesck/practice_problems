import { removeDuplicate } from "./removeArrayDuplicates";
describe("find duplicate", () => {
  it("should return something", () => {
    const result = removeDuplicate([1, 2, 1]);
    expect(result).toBeDefined();
  });
  it("should return  1 and 2 if duplicate number is 1", () => {
    const result = removeDuplicate([1, 2, 1]);
    console.log(result);
    expect(result).toEqual([1, 2]);
  });
  it("should return correct array if triple duplicate number", () => {
    const result = removeDuplicate([1, 2, 5, 3, 4, 5, 7, 8, 9, 10, 5]);
    expect(result).toEqual([1, 2, 5, 3, 4, 7, 8, 9, 10]);
  });
  it("should return correct array if multiple duplicate numbers", () => {
    const result = removeDuplicate([1, 2, 3, 4, 2, 5, 7, 8, 9, 10, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  });
  it("should return correct array when array is not ordered", () => {
    const result = removeDuplicate([9, 6, 1, 2, 3, 7, 8, 10, 1, 4]);
    expect(result).toEqual([9, 6, 1, 2, 3, 7, 8, 10, 4]);
  });
});
