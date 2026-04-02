const express = require('express');
const router = express.Router();

const {
  createLibraryAttendant,
  getLibraryAttendants
} = require('../controllers/libraryAttendantController');

router.get('/library-attendants', getLibraryAttendants);
router.post('/library-attendants', createLibraryAttendant);

module.exports = router;