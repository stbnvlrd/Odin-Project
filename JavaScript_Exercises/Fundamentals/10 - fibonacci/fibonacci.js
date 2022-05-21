const fibonacci = function(text) {
    index = parseInt(text)
    
    let fibolist = [1, 1,];
    for(let index = 0; index < 30; index++){
        fibolist.push((fibolist[index] + fibolist[index + 1]))
    }

    if (index < 0) {
        return "OOPS"
    } else {
        return fibolist[index - 1];
    }   
    
};

// Do not edit below this line
module.exports = fibonacci;