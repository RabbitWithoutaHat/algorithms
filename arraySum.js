let numbers = [2, 7, 11, 15]
let target = 22

function arraySum(numbers, target) {
   for (let i = 0; i < numbers.length; i++) {
      let firstNumber = numbers[i];
      let secondNumber = target - firstNumber;
      for (let j = 0; j < numbers.length; j++) {
         if (i === j) {
            continue
         }
         if (numbers[j] === secondNumber) {
            return [i, j]
         }
      }
   }
   return false
}
console.log(arraySum(numbers, target));
