const sumAll = function(inicial_num, final_num) {
    let sum_total
    if (typeof inicial_num == 'number' && typeof final_num == 'number' && final_num >= 0 && inicial_num >= 0){
        if(inicial_num < final_num){
            sum_total = 0;
            for(var i = inicial_num; i<=final_num; i++ ){
                sum_total = sum_total + i; 
            }
        } else if (inicial_num > final_num){
            sum_total = 0;
            for(var i = final_num; i<=inicial_num; i++ ){
                sum_total = sum_total + i; 
            }
        } else {
            sum_total = inicial_num
        }
    } else {
        sum_total = 'Error'
    }
    return sum_total
};

// Do not edit below this line
module.exports = sumAll;