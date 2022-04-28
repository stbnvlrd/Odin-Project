const removeFromArray = function(array, element1="", element2 ="", element3="", element4 ="") {
    var index 
    if (element1 !== "") {
        index = array.indexOf(element1);
        console.log(index);
        if(index !== -1){
            array.splice(index, 1);
        }
    }
    if (element2 !== "") {
        index = array.indexOf(element2);
        console.log(index);
        if(index !== -1){
            array.splice(index, 1);
        }
    }
    if (element3 !== "") {
        index = array.indexOf(element3);
        console.log(index);
        if(index !== -1){
            array.splice(index, 1);
        }
    }
    if (element4 !== "") {
        index = array.indexOf(element4);
        console.log(index);
        if(index !== -1){
            array.splice(index, 1);
        }
    }
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
// module.exports = removeFromArray;