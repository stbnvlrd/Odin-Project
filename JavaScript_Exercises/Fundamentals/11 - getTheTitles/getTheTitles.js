const getTheTitles = function(books = []) {
    let title = [];
    for (let index = 0; index < books.length; index++) {
        console.log(books[index])
        title.push(books[index].title);
        
    }
    return title
};

// Do not edit below this line
// module.exports = getTheTitles;