const getTheTitles = function(array) {
   let titles  = []
   for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title)
    }
    return titles
};
// const getTheTitles2 = function(array) {
//     return array.map(function(book) {
//         return book.title;
//     });
//  };
// Do not edit below this line
module.exports = getTheTitles;
