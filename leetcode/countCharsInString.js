// In this problem you will be given a string. Your string is a representation of a phrase. It can contain words, and spaces.
// You need to return a hashmap/dictionary that contains the number each character occurs in the original string.

/*
Example:
the_string = "My name is Fred"
answer = { "M": 1, "y": 1, " ": 3, "n": 1, "a": 1, "m": 1, "e": 2, "i": 1, "s": 1, "F": 1, "r": 1, "d": 1 }
*/

function parseWord(word){
    outputObj = {}
    for (i in word){
        if (outputObj[word[i]]){ //checks if the letter or property already exists
            outputObj[word[i]] += 1 //if letter or property exists add one to the value
        } else {
            outputObj[word[i]] = 1 //if letter or property does not exist, create the property and assign value as 1
        }
    }
    return outputObj
}

console.log(parseWord("My name is Fred"))