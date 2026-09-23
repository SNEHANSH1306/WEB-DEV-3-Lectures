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