import {findMissingNumber} from "./missingNumber"

describe("find missing number", () => {
  it("should return something", () => {
    const result = findMissingNumber([1,2,3]);
    expect(result).toBeDefined();
  });
  it("should return 1 if missing number is 1", () => {
    const result = findMissingNumber([2,3,4,5]);
    expect(result).toEqual(1);
  });
  it("should return last number if missing number is last number", () => {
    const result = findMissingNumber([1,2,3,4,5,6,7,8,9]);
    expect(result).toEqual(10);
  });
  it("should return correct missing number", () => {
    const result = findMissingNumber([1,2,3,4,6,7,8,9,10]);
    expect(result).toEqual(5);
  });
  it("should return correct missing number when array is not ordered", () => {
    const result = findMissingNumber([9,6,1,2,3,7,8,10,4]);
    expect(result).toEqual(5);
  });
})