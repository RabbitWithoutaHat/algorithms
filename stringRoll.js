let string = ["a","a","b","b","c","c","c"]


function stringRoll(array) {
   let objWithWords = {};
   for (let i = 0; i < array.length; i++) {
      if(!objWithWords[array[i]])objWithWords[array[i]] = 0
      objWithWords[array[i]]++;
   }
   newArray = []
   for (const key in objWithWords) {
      newArray.push(key);
      newArray.push(objWithWords[key].toString())
   }
   return newArray;
}
console.log(stringRoll(string));
