function removeDuplicates(str) {
    const uniqueChars = {};
  
    // Use map() to loop through the string
    str.split('').map(char => {
      uniqueChars[char] = true;
    });
  
    // Use Object.keys() to get an array of the unique characters
    const uniqueArray = Object.keys(uniqueChars);
  
    // Join the array back into a string and return it
    return uniqueArray.join('');
  }
  
  
  const str = 'abcadeecfb';
  const result = removeDuplicates(str);
  console.log(result); 
  

//Q2
var string = "abcadeecfb";
const myMap = new Map();
for (var alphabet of string) {
  if (myMap.has(alphabet)) {
    myMap.set(alphabet, myMap.get(alphabet) + 1);
  } else {
    myMap.set(alphabet, 1);
  }
}
console.log(myMap);