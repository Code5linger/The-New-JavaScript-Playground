const FavoriteBook = [];

function addFavoriteBook(bookName) {
  if (bookName.includes('Great')) {
    console.log(false);
  } else if (!bookName.includes('Great')) {
    FavoriteBook.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log('Favorite Books: ' + FavoriteBook.length);
}

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();
console.log(FavoriteBook);
