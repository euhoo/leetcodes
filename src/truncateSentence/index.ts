var truncateSentence = function(s, k) {
    const arr = s.split(' ')
    if (arr.length <= k) return s;
    return arr.filter((w, i) => i < k).join(' ');
  };