let string = "This is an example string with more than twenty characters.";

function countVowelsAndConsonants(str) {
    let vowels = 'AEIOUaeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (/[a-zA-Z]/.test(char)) {
            consonantCount++;
        }
    }

    return { vowelCount, consonantCount };
}

let counts = countVowelsAndConsonants(string);

console.log(`Vowels: ${counts.vowelCount}, Consonants: ${counts.consonantCount}`);



// output: Vowels: 14, Consonants: 25
