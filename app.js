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
        title: 'Biology',
        author: 'Rajeshree pvt ltd',
        images: ["/images/Biology.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Top Publication",
        price: 800,
        discount: 10,
        actual_price: 1000,
        rating: 4.5
    },
    {
        _id: 2,
        title: "Motivation speech ",
        author: 'Gandhi  pvt ltd',
        images: ["/images/TopProduct.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "Top Publication",
        price: 350,
        discount: 20,
        actual_price: 500,
        rating: 4.2
    },
    {
        _id: 3,
        title: 'GK',
        author: 'Gabbar pakhvala',
        images: ["/images/GK.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "kumarji pvt ltd",
        price: 330,
        discount: 15,
        actual_price: 420,
        rating: 3.6
    },
    {
        _id: 4,
        title: 'How to The Win',
        author: 'Gabbar pakhvala',
        images: ["/images/GowToWin.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "gussy pvt",
        price: 560,
        discount: 0,
        actual_price: 560,
        rating: 4
    },
    {
        _id: 5,
        title: 'Top Five Regrets',
        author: 'see chune ',
        images: ["/images/TopFiveRegrets.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "anit pvt ltd",
        price: 230,
        discount: 15,
        actual_price: 400,
        rating: 4.8
    },
    {
        _id: 4,
        title: 'Who change World',
        author: 'amit kagvar',
        images: ["/images/WhoChangeWorld.png"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishers: "sevan pvt ltd",
        price: 600,
        discount: 15,
        actual_price: 1000,
        rating: 4.5
    },
];



// Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Get all cartItems
// app.get('/api/cartItems/:id', (req, res) => {
//     let items = cartItems.filter((item) => item?.userId === parseInt(req.params.id));
//     res.json(items);
// });

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
