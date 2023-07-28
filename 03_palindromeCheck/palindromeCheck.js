export const palindromeCheck = (string) => {
  let palindrome;

  string = string.toLowerCase().replace(/\s+/g, "");

  const reversedString = string.split("").reverse().join("");

  if (reversedString === string) {
    palindrome = true;
    return palindrome;
  } else {
    palindrome = false;
    return palindrome;
  }
};
