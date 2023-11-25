// Dummy book data (replace with your actual data)
const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    // Add more books as needed
];

function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous results

    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchInput) || book.author.toLowerCase().includes(searchInput);
    });

    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}
