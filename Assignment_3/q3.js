let string = 'INDIA';

let charArray = string.split('');

charArray.splice(1, 0, 'O', 'N', 'E', 'S');

let newString = charArray.join('');

console.log(newString); 

// Output: 'INDONESIA'