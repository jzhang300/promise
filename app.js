var Promise = require('bluebird');

// placeholder allBooksArr
var allBooksArr = [
  {
    files: [
      'page 1',
      'page 2',
      'page 3',
      'page 4',
      'page 5',
      'page 6'
    ]
  },
  {
    files: [
      'page 7',
      'page 8',
      'page 9',
      'page 10',
      'page 11',
      'page 12'
    ]
  }
];

// get all pages of all books into one huge array
var allPages = allBooksArr.reduce(function(prev, curBook) {
  curBook.files.forEach(function(curPage) {
    prev.push(curPage);
  });
  return prev;
}, []);

Promise.each(allPages, convertPage).then(function(result) {
  console.log(result);
});

function convertPage(file) {
  return new Promise(function(resolve, reject) {
    // replace this with actual async function
    setTimeout(function() {
      console.log(file);
      resolve(file);
    }, 3000);
  });
}