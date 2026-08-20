const express = require('express');
const app = express();
app.use(express.json())
// app.get("/",(req, res)=>{
//     return res.status(200).send("Hello World")
// })


// CRUD OPERATION
let students = ["ALEX", "JOHN", "JAMES", "JACKSON" ]

// READ 
app.get("/students",(req, res)=>{
    res.status(200).send(students)
})

// CREATE
app.post("/students",(req, res)=>{
    let data = req.body.name
    students.push(data)
    res.status(201).send("Student Added Successfully")
})

// UPDATE
app.put("/students/:index",(req, res)=>{
    let index = req.params.index
    let data = req.body.name
    students[index] = data
    res.status(200).send("Student Updated Successfully")
})

// DELETE
app.delete("/students/:index",(req, res)=>{
    let index = req.params.index
    students.splice(index, 1)
    res.status(200).send("Student Deleted Successfully")
})

app.listen(3000,() => {
    console.log("Server is running on port 3000")
})