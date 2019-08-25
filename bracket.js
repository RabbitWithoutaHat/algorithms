function isPairBracket(string) {
   const arr = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
         arr.push(string[i]);
      } else {
         let lastInStack = arr[arr.length - 1]
         if (arr.length === 0) {
            return false
         }
         if (string[i] === ')' && lastInStack === '(' || string[i] === ']' && lastInStack === '[' || string[i] === '}' && lastInStack === '{') {
            arr.pop()
         }
      }
   }

   return arr.length === 0
}
console.log(isPairBracket("()[][]}}"));
