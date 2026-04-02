const express = require('express');
const router = express.Router();

const {
  getStudents,
  createStudent,
  updateStudent,getStudentById } = require('../controllers/studentController');


router.post('/student', createStudent);
router.get('/students', getStudents);       
router.get('/student/:id', getStudentById); 
router.put('/student/:id', updateStudent);

module.exports = router;