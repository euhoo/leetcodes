var firstPalindrome = function(words) {
    const isPalindrome = str => {
      if (!str) return true;
      for (let i = 0; i <= Math.floor(str.length); i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
      }
      return true;
    }
    for (let j = 0; j < words.length; j++) {
      if (isPalindrome(words[j])) return words[j]
    }
    return '';
  };