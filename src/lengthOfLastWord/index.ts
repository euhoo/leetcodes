var lengthOfLastWord = function(s) {
    const str = s
      .trim()
      .split(' ')
      .reverse()
      .join(' ')
    const indexOf = str.indexOf(' ');
    return indexOf === -1 ? str.length : indexOf;
  };