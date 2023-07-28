import { palindromeCheck } from "./palindromeCheck";

describe("palindrome finder", () => {
  it("should return something", () => {
    const result = palindromeCheck("");
    console.log("result", result);

    expect(result).toBeDefined();
  });
  it("failing palindrone", () => {
    const result = palindromeCheck("meow");
    console.log("result", result);

    expect(result).toEqual(false);
  });
  it("passing single word palindrone", () => {
    const result = palindromeCheck("kayak");
    console.log("result", result);

    expect(result).toEqual(true);
  });
  it("passing palindrone phrase", () => {
    const result = palindromeCheck("a man a plan a canal Panama");
    console.log("result", result);

    expect(result).toEqual(true);
  });
  it("passing palindrone upper and lower case", () => {
    const result = palindromeCheck("dEifIeD");
    console.log("result", result);

    expect(result).toEqual(true);
  });
});
