const express = require('express');
const router = express.Router();
const students = require('../data/students');
const validatestudent = require("../middleware/validation");

let nextId = students.length + 1;


// CRUD
router.get('/students', (req, res) => {
    res.json(students);
});

router.get('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.json(student);
});

router.post('/students', validatestudent, (req, res) => {
    const { name, course, age } = req.body;
    const newStudent = { id: students.length + 1, name, course, age };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.put('/students/:id', validatestudent, (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send('Student not found');
    }
    const { name, course, age } = req.body;
    student.name = name;
    student.course = course;
    student.age = age;
    res.json(student);
});



router.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).send('Student not found');
    }
    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent[0]);
});

module.exports = router;