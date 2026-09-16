use("AI_&_ML")

// db.createCollection("students")

// db.students.insertOne(
//     {
//         "NAME":"ALEX", 
//         "AGE": 20,
//         "ROLL NO":123456
//     }
// )

// db.students.insertMany([
//     {
//         "NAME":"JACK",
//         "AGE":21, 
//         "ROLL NO":987654
//     },
//     {
//         "NAME":"JILL",
//         "AGE":22,
//         "ROLL NO":111111
//     },
//     {
//         "NAME":"JAMES",
//         "AGE":23,
//         "ROLL NO":222222
//     },
        
// db.students.insertMany([
//     {
//             "NAME":"JAMES",
//             "AGE":23,
//             "ROLL NO":222222
//         }

// ])

//To find the first occuraance 
    // db.students.findOne({"NAME": "JACK"}) 


// To update the document
    // db.students.updateOne({
    //     "NAME":"JILL"},{
    //     $set:{
    //         "NAME":"JOY"
    //     }
    // })

    // db.students.updateMany(
    //     {
    //         "NAME":"JAMES"
    //     },
    //     {
    //         "$set":{
    //         "NAME":"JAMES BOND"
    //     }}
    // )


// TO delete the document

    // db.students.deleteOne({"NAME":"JAMES"})

//To delete multiple documents
    // db.students.deleteMany({"NAME":"JAMES BOND"})
    