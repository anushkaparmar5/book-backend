const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let books = [
    // set book data
    {
        _id: 1,
        title: 'Book 1',
        author: 'Author 1',
        images: ["/images/image.png", "/images/image.png"],
        description: "yes this is very good book",
        publishers: "qwe ytr",
        price: 800,
        discount: 10,
        actual_price: 1000,
        rating: 4.5
    },
    {
        _id: 2,
        title: 'Book 2',
        author: 'Author 2',
        images: ["/images/image.png", "/images/image.png"],
        description: "yes this is very good book",
        publishers: "abs djg",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3
    },
];

// Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Get a single book by ID
app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b._id === bookId);

    if (!book) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        res.json(book);
    }
});

// Add a new book
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { _id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Mock API server is running on port ${port}`);
});
