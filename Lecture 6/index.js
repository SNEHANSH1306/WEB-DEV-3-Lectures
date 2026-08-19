// console.log(process.pid);
// console.log(process.ppid);
// console.log(process.uptime());
// console.log(process.argv[6]);

// function addition(a,b) {
//     return Number(a) + Number(b);
// }

// console.log(addition(process.argv[2], process.argv[3]));

const http = require("http") //when client and server communicate, http module is used.

const server = http.createServer((req,res)=>{

    // res.write("<h1>Hello World</h1>")
    // res.end()

//     if(req.url ==="/"){
//         res.write("<h1>Home Page</h1>")
//         res.end()
//     }   

//     console.log(req.url)
//     res.end()

    // console.log(req.method)
    

    // if (req.method === "GET"){
    //     res.write("<h1>GET Request</h1>")
    //     res.end()
    // }

    // if(req.method === "POST"){
    //     res.write("<h1>POST Request</h1>")
    //     res.end()
    // }

    // if(req.method === "PUT"){
    //     res.write("<h1>PUT Request</h1>")
    //     res.end()
    // }

    // if(req.method === "DELETE"){
    //     res.write("<h1>DELETE Request</h1>")
    //     res.end()
    // }
    


    // if (req.url === "/user" && req.method === "GET"){
    //     res.write("<h1>Data Retreiving</h1>")
    //     res.end()
    // }
    
    // if (req.url === "/user" && req.method === "POST"){
    //     res.write("<h1>Data Creating</h1>")
    //     res.end()
    // }

    // console.log(req.headers)
    // res.end()
    
    // console.log(req.headers.token)
    // res.end()
    
    // console.log(req.headers.host)
    // res.end()

    let data =""
    req.on("data", (chunk)=>{
        data += chunk
    })

    req.on("end", ()=>{
        console.log(data)
        res.end()
    })

    res.end()

})


server.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})