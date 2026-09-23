use("AI_&_ML")

// To find the count of documents in the collection
    // db.Students.find()
    // db.Students.find().count()

// db.Students.find().skip(4).limit(6)


// Value of main id is always 1
// db.Students.find({},{_id:0,studentId:1,name:1,age:1, course:1, gender:1,semester:1, city:1, email:1, marks:1})

// db.Students.find({"age":{$gt:18}},{
//     _id:0,
//     studentId:1,
//     name:1,
//     age:1, 
//     course:1, 
//     gender:1,
//     semester:1, 
//     city:1, 
//     email:1, 
//     marks:1
// })

// Projection is when we want to retrieve  selective data.

db.Students.find({"attendance":{$gte:80, $lte:90}})

// Every accumalator oprator will come in group
// Every other oprators will be in projection
