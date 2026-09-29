const fs = require("fs");

// 1.) Create a new file named dumy.txt and add or insert some text into it.
fs.writeFile("demo.txt", "This is a demo text for the test.",(err) => {
    if(err)
        console.log(err)
    else
        console.log("FileWritten");
})


//  2.) Read that file and console the data of that file.
fs.readFile("demo.txt", "utf-8", (err, data) => {
    if(err)
        console.log(err)
    else
        console.log(data);
});


// 3.) Add some another data or text into that file after the existing data.
fs.appendFile("demo.txt", "  This is additional text added from append file.", (err) => {
    if(err)
        console.log(err)
    else
        console.log("Data Appended");
});


// 4.) Delete that file and console the succuss message "FILE DELETED SUCCESSFULLY".
fs.unlink("demo.txt", (err) => {
    if(err)
        console.log(err)
    else
        console.log("FILE DELETED SUCCESSFULLY");
});
