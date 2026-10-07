use("AI_&_ML")

// db.students.find({"course":"BCA"}).explain("executionStats")

// db.students.createIndex({"course":1})

// db.students.getIndexes()

// db.students.createIndex({"course":1, "age":1})

// db.Students.find({"course":"BBA",age:21}).explain("executionStats")

// db.Students.find({attendance:95}).explain("executionStats")

// db.Students.find({course:"CSE"}).explain("executionStats")

// db.Students.dropIndex("course_1")

// db.Students.dropIndex("course_1_age_1")




// db.user.find()

// db.user.createIndex({description:"text"})

// db.user.find({$text:{$search:"MongoDB"}})

// db.user.find({$text:{$search:"includes"}})


// When not to use indexing...
    // 1. When the collection (data-set) is small.
    // 2. When the collection contains frequent write operations.
    // 3. Don't use indexing on rarely matched queries.
    // 4. Don't apply indexing when most of the queries are matched.

