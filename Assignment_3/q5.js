function correctfn(string, wrong, correct) {
    let regex = new RegExp(`\\b${wrong}\\b`, 'g');
    
    let correctedString = string.replace(regex, correct);
    
    return correctedString;
}

let sentence = "I love my cuntry.";
let wrongWord = "cuntry";
let correctWord = "country";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);

console.log(correctedSentence); 

// Output: "I love my country."
