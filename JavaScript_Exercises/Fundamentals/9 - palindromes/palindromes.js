const palindromes = function (text = "") {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    text = text.toLowerCase();
    console.log(text);
    let isit = true; 
    for(let index = 0; index < text.length; index++){
        backindex = text.length - index - 1;
        if(text[index] === text[backindex]){

        } else{
            isit = false;
        }

    }
    return isit;
};

// Do not edit below this line
 module.exports = palindromes;