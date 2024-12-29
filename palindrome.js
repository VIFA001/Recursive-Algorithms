function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  }

  return false;
}
