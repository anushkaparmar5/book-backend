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
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "abs djg",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3
    },
];

let cartItems = [
    // set book data
    {
        _id: 1,
        title: 'Book 1',
        author: 'Author 1',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 800,
        discount: 10,
        actual_price: 1000,
        rating: 4.5,
        userId: 1,
        quantity: 1,
    },
    {
        _id: 2,
        title: 'Book 2',
        author: 'Author 2',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 1,
        quantity: 1,
    },
    {
        _id: 3,
        title: 'Book 3',
        author: 'Author 3',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 2,
        quantity: 1,
    },
    {
        _id: 3,
        title: 'Book 3',
        author: 'Author 3',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 1,
        quantity: 1,
    },
    {
        _id: 3,
        title: 'Book 3',
        author: 'Author 3',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 1,
        quantity: 1,
    },
    {
        _id: 3,
        title: 'Book 3',
        author: 'Author 3',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 1,
        quantity: 1,
    },
    {
        _id: 3,
        title: 'Book 3',
        author: 'Author 3',
        images: ["/images/image.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Abc Def",
        price: 500,
        discount: 15,
        actual_price: 999,
        rating: 4.3,
        userId: 1,
        quantity: 1,
    },
];

// Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Get all cartItems
app.get('/api/cartItems/:id', (req, res) => {
    let items = cartItems.filter((item) => item?.userId === parseInt(req.params.id));
    res.json(items);
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

app.listen(port, () => {
    console.log(`Mock API server is running on port ${port}`);
});
