type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

function listBooks(): void {
  console.log('All Books:');
  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  for (const book of results) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
