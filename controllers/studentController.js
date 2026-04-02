const Student = require ('../models/student');


 exports.getStudents = async (req, res) => {
  try {
    const student = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(
      req.params.id, )

    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
