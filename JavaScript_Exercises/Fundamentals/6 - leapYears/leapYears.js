const leapYears = function(year) {
    var leap = false;
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                leap = true;
            }
                
        } else{
            leap = true;
        }
    } else{

    }
    return leap
};

// Do not edit below this line
module.exports = leapYears;