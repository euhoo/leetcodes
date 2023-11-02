const isValidPalindrome = (s: string): boolean => {
    const str = s.replace(/[^a-zA-ZА-Яа-яЁё0-9]/gi, '').toLowerCase();
    console.log(str);
    if (!str) return true;
    for (let i = 0; i <= Math.floor(str.length); i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true
  };
