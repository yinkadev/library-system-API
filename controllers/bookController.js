const Book = require('../models/books');

exports.getBooks = async (req, res) => {
  try {
   const page = parseInt(req.query.p) || 0;
    const booksperpage = 4;
  const books = await Book.find()
  .populate("authors")
  .populate("borrowedBy") 
  .populate("issuedBy")
  .sort({ createdAt: -1 })
    .skip(page * booksperpage)
    .limit(booksperpage);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(
      req.params.id, ).populate("authors borrowedBy issuedBy")

    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.borrowBook = async (req, res) => {
  try {
    const { studentId, attendantId, returnDate } = req.body;

    if (!studentId || !attendantId || !returnDate) {
      return res.status(400).json({ message: "All fields are required" });
    }
          
    const book = await Book.findById(req.params.id).populate("authors borrowedBy issuedBy");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "OUT") {
      return res.status(409).json({ message: "Book already borrowed" });
    }

    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = returnDate;

    await book.save();

    res.status(200).json({
      message: "Book borrowed successfully",
      book
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.returnBook = async (req, res) => {
  try {
  
    const book = await Book.findById(req.params.id).populate("authors borrowedBy issuedBy");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "IN") {
      return res.status(409).json({ message: "Book has been returned" });
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();

    res.status(200).json({
      message: "Book returned successfully",
      book
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};