const repeatString = function(world, number = 2) {
    var repeatedString = '';
    if (number >= 0){
        for (var i=1; i <= number; i++){
            repeatedString = world + repeatedString;
        }
        
    } else{
        repeatedString = 'ERROR'
    }
    return repeatedString;
};


// Do not edit below this line
module.exports = repeatString;