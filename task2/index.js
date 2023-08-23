function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}

function LibraryCatalog() {
    this.books = [];
}

LibraryCatalog.prototype.addBook = function(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook)
}

LibraryCatalog.prototype.bookIterator = function* () {
    for (const book of this.books) {
        yield book;
    }
};

LibraryCatalog.prototype[Symbol.iterator] = function() {
    return this.bookIterator()
};

LibraryCatalog.prototype.getBooksByAuthor = function(authorName) {
    return this.books.filter(book => book.author === authorName)
}


// Test Data
const booksInStore = new LibraryCatalog();
booksInStore.addBook("Sarvy of Coast", "Adeagbo Rotimi", "Fiction")
booksInStore.addBook("Lone Survival ", "Ranches Marian", "Romance")
booksInStore.addBook("Rainy Days", "Adeagbo Rotimi", "Thriller");

console.log("All Books: \n");
for (const book of booksInStore) {
    console.log(book.title);
}

console.log("\nBooks by Author:");
const booksByAuthor = booksInStore.getBooksByAuthor("Adeagbo Rotimi");
for(const book of booksByAuthor) {
    console.log(`The Book ${book.title} was written by ${book.author}`);
}