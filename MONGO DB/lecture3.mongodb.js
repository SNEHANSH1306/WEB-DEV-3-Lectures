use("AI_&_ML")

db.Students.aggregate([
    {
        //match
        $match: {attendance:{$gte:80}}
    },
    {
        //group
        $group:{
            _id:"$course",
        }
    },
    {
        //project
    }
])

// db.Students.find({"course":"CSE"})

// $GROUP
    // db.Students.aggregate([
    //     {$group:{_id:"$age"}}   
    // ])

// $Match
    // db.Students.aggregate([
    //     {$match:{"course":"CSE"}},   
    // ])

// $PROJECT (By default projection me sari value zero hoti hai or id ki value 1 hoti hai)
    // db.Students.aggregate([
    //     {$project:{name:1, course:1}}
    // ])


// Q.) Find all students who have attendance greater than 85.
    // db.Students.aggregate([
    //     {
    //         $match:{
    //             "attendance":{
    //                 $gt:85
    //             }}
    //     }
    // ])

// Q.) Find all BCA students whos attendance is greater than 80.
    // db.Students.aggregate([
    //     {
    //         $match:{
    //             "course":"BCA",
    //             "attendance":{
    //                 $gt:80
    //             }
    //         }
    //     }
    // ])

// Q.) Find all students whos maths marks is greater than 80.
    // db.Students.aggregate([
    //     {
    //         $match:{
    //             "marks.math":{$gt:80}
    //         }
    //     }
    // ])

// Q.) Find the number of students in each course.
    // db.Students.aggregate([
    //     {$group:{_id:"$course", NumberofStudents:{$sum:1}}}
    // ])

// Q.) Find the average attendance of each course.
    // db.Students.aggregate([
    //     {$group:{_id:"$course", AverageAttendance:{$avg:"$attendance"}}}
    // ])

// Q.) Find the max math marks of each course.
    // db.Students.aggregate([
    //     {$group:{_id:"$course", MaxMathMarks:{$max:"$marks.math"}}}
    // ])

// Q.) Find the min math marks of each course.
    // db.Students.aggregate([
    //     {$group:{_id:"$course", MinMathMarks:{$min:"$marks.math"}}}
    // ])

// Q.) Find the avg marks of math of each course.
    // db.Students.aggregate([
    //     {$group:{
    //         _id:"$course",
    //         AvgMathMarks:{
    //             $avg:"$marks.math"
    //     }}}
    // ])

// Q.) Find total students according to each city.
    // db.Students.aggregate([
    //     {$group:{
    //         _id:"$city",
    //         TStudentsFromCity:{
    //             $sum:1}
    //     }}
    // ])

// Q.) Find avg attandance of CSE Students.
    // db.Students.aggregate([
    //     {$match:{"course":"CSE"}},
    //     {$group:{_id:null, AvgAttendance:{$avg:"$attendance"}}}
    // ])

// Q.) Find the max marks among BCA students.