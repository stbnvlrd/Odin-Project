const reverseString = function(word) {
    var reversedWord = '';
    for(var i=1; i <= word.length; i++){
        reversedWord = reversedWord + word.charAt(word.length - i);
    }
    return reversedWord
};

console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc!'));
console.log(reverseString(''));
// Do not edit below this line
module.exports = reverseString;