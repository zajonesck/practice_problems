import { containsDuplicate } from "./findDupNum";

describe("duplicate finder", () => {
  it("should return something", () => {
    const result = containsDuplicate([1, 2, 3]);
    console.log("result", result);

    expect(result).toBeDefined();
  });
  it("has more than one item", () => {
    const result = containsDuplicate([0]);
    console.log("result", result);

    expect(result).toEqual("is not duplicate");
  });
  it("index 0 and 1 match", () => {
    const result = containsDuplicate([1, 1]);
    console.log("result", result);

    expect(result).toEqual("is duplicate");
  });
  it("index 0 and 1 dont match", () => {
    const result = containsDuplicate([1, 2]);
    console.log("result", result);

    expect(result).toEqual("is not duplicate");
  });
  it("index 1 and 2 match", () => {
    const result = containsDuplicate([0, 1, 1]);
    console.log("result", result);

    expect(result).toEqual("is duplicate");
  });
  it("index 0 and 1 match in a length of 4", () => {
    const result = containsDuplicate([0, 1, 1, 4]);
    console.log("result", result);

    expect(result).toEqual("is duplicate");
  });
  it("length 5 no duplicate", () => {
    const result = containsDuplicate([0, 1, 2, 3, 4]);
    console.log("result", result);

    expect(result).toEqual("is not duplicate");
  });
});
