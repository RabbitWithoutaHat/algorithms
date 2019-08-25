let string = 'A man, a plan, a canal: Panama'

function reverse(str) {
   let reverseStr = ''
   for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i]
   }
   return reverseStr
}
console.log(reverse(string));
