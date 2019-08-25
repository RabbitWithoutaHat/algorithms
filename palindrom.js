let str = 'Гори, печурка, круче пирог'

function palindrom(str) {
   let string = str.toLowerCase();
   for (let i = 0, j = string.length - 1; i < string.length / 2;) {
      if(string[i] === ' ' || string[i] === ',') {
         i++;
         continue
      }
      if(string[j] === ' ' || string[j] === ',') {
         j--;
         continue
      }
      if(string[i] !== string[j]) {
         return false
      }
      i++
      j--

   } return true
}
console.log(palindrom(str));
