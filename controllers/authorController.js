const Author = require('../models/author');

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().sort({ createdAt: -1 });
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(
      req.params.id, )

    if (!author) {
      return res.status(404).json({ message: "author not found" });
    }

    res.status(200).json(author);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "author not found" });
    }

    res.status(200).json({ message: "author deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!author) {
      return res.status(404).json({ message: "author not found" });
    }

    res.status(200).json(author);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};