function repeatedDigitSum(number) {
  
  function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  while (number >= 10) {
    number = sumOfDigits(number);
  }
  
  return number;
}

// Example usage:
console.log(repeatedDigitSum(456)); // Output: 6
console.log(repeatedDigitSum(1234)); // Output: 1
console.log(repeatedDigitSum(9999)); // Output: 9
