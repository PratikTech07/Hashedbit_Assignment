function countWords(paragraph) {
    var words = paragraph.split(/\s+/);

    return words.length;
}

var paragraph = "This is an example paragraph  It contains multiple sentences";

// output : 9

