
const LibraryAttendant = require('../models/libraryAttendant');

exports.getLibraryAttendants = async (req, res) => {
  try {
    const libraryAttendants = await LibraryAttendant.find().sort({ createdAt: -1 });
    res.status(200).json(libraryAttendants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createLibraryAttendant = async (req, res) => {
  try {
    const libraryAttendant = await LibraryAttendant.create(req.body);
    res.status(201).json(libraryAttendant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
