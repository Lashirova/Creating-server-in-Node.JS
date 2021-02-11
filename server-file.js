const fs = require('fs')
const http = require('http')

const myCustomServer= http.createServer((request,response)=>{
    fs.readFile('test.html',(err,data)=>{
        if (err) {console.log(err);}
        response.end(data);
    })
})

myCustomServer.listen("3001")