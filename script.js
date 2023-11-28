const trolleyItems = [];

function updateTrolley() {
    const trolleyItemsList = document.getElementById('trolleyItems');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear previous items
    trolleyItemsList.innerHTML = '';

    // Populate trolley items
    trolleyItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.title} - $${item.price}`;
        trolleyItemsList.appendChild(div);
    });

    // Calculate and display total price
    const totalPrice = trolleyItems.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = totalPrice;
}

document.querySelectorAll('.remove-item').forEach(function (removeBtn) {
    removeBtn.addEventListener('click', function () {
        const itemIndex = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
        trolleyItems.splice(itemIndex, 1);
        updateTrolley();
    });
});

// Dummy book data (replace with your actual data)
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 15 },
    // Add more books as needed
];

function addToTrolley(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        trolleyItems.push(book);
        updateTrolley();
    }
}

// Initial update to display total price
updateTrolley();
