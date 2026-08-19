const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.version());
console.log(os.uptime());
console.log(os.totalmem()/1024/1024/1024 + " GB");
console.log(os.freemem()/1024/1024/1024 + " GB");
console.log(os.cpus());
console.log(os.cpus().length);




const fs = require("fs");
 

// fs.writeFile("data.txt", "Hello World", (err) => {
//     if(err) console.log(err);
//         else console.log("File Written");
// });

// fs.readFile("data.txt", "utf-8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });

// fs.appendFile("data.txt", "\n 3rd SEM", (err) => {
//     if(err) console.log(err);
//     else console.log("File Appended");
// });

// fs.unlink("data.txt", (err) => {
//     if(err) console.log(err);
//     else console.log("File Deleted");
// });


// fs.writeFile("demo.html", "<h1>Hello World</h1>", (err) => {
//     if(err) console.log(err);
// //         else console.log("File Written");
// // });

// fs.readFile("demo.html", "utf-8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });

// fs.appendFile("demo.html", "\n<h2>3rd SEM</h2>", (err) => {
//     if(err) console.log(err);
//     else console.log("File Appended");
// });

// fs.unlink("demo.html", (err) => {
//     if(err) console.log(err);
//     else console.log("File Deleted");
// });

