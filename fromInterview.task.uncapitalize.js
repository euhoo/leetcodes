// 29.03.22
/**
 * Task 1: Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Put the result in #output1 html element
 * Expected result: 'jS string exerCises'
 */
const inputData1 = 'SJ String ExerCises';
// interview version
const uncapitalize = str => {
  return str
    .split(' ')
    .map(w => {
      const first = w[0];
      const tail = w.substring(1, w.length)
      return first.toLowerCase() + tail;
    })
    .join(' ')
};

// console.log(uncapitalize(inputData1));

/**
 * Task 2: Find the most frequent item of an array
 * Put the result in #output2 html element
 * Expected result: a ( 5 times )
 **/
// interview version
const mostFreqSymb = arr => {
  const freqMap = new Map();
  arr.forEach(s => {
    if (freqMap.has(s)) {
      const value = freqMap.get(s);
      return freqMap.set(s, value + 1)
    }
    freqMap.set(s, 1);
  })
  let maxFreq = 0;
  let symb = arr[0];
  const entries = freqMap.entries();
  for (let i = 0; i < freqMap.size; i++) {
    const [key, value] = entries.next().value;
    if (value > maxFreq) {
      maxFreq = value;
      symb = key;
    }
  }
  return `${symb} ( ${maxFreq} times )`;
}
const mostFreqSymb2 = arr => {
  let maxFreq = 0;
  let maxSymb = arr[0];
  let symbolsFreqMap = {};
  arr.forEach((currentSymb) => {
    if (symbolsFreqMap.hasOwnProperty(currentSymb)) {
      symbolsFreqMap[currentSymb] = symbolsFreqMap[currentSymb] + 1;
    } else {
      symbolsFreqMap[currentSymb] = 1;
    }
    if (symbolsFreqMap[currentSymb] > maxFreq){
      maxFreq = symbolsFreqMap[currentSymb];
      maxSymb = currentSymb;
    }
  }, {});
  return `${maxSymb} ( ${maxFreq} times )`;
}
const inputData2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(mostFreqSymb2(inputData2));

