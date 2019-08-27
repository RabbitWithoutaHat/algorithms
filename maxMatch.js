let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."


function maxMatch(string) {
   let objWithWords = {};
   let wordsArr = string.replace(/(,|\.)/g, '').split(' ');
   for (let i = 0; i < wordsArr.length; i++) {
      if (!objWithWords[wordsArr[i]]) {
         objWithWords[wordsArr[i]] = 1
      } else {
         objWithWords[wordsArr[i]]++
      };
   }
   maxMatchWord = ''
   wordCounter = 0;
   for (const word in objWithWords) {
      if (objWithWords[word] > wordCounter) {
         wordCounter = objWithWords[word];
         maxMatchWord = word;
      }
   }
   return maxMatchWord;
}
console.log(maxMatch(paragraph));
