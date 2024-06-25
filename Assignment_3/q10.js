function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
var inputString = "Hello";
var reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString);

// output : Reversed string: olleH