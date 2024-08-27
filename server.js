// console.log("Hello World")

// const os = require('os')
// const path = require('path')
// const {add, sub, mul, div} = require('./math')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.parse(__filename)) 

// console.log(add(3,4))
// console.log(sub(3,4))
// console.log(mul(3,4))
// console.log(div(3,4))


// import { readFile } from 'node:fs'; 
// const fs =  require('fs')
// const path = require('path')
// const fsPromises = require('fs').promises

// const fileOps = async() => {
//     try{        
//         const data = await fsPromises.readFile(path.join(__dirname, 'file','start.txt'), 'utf8')
//         console.log(data)
//         await fsPromises.writeFile(path.join(__dirname, 'file', 'sub.txt'), 'Hi I played football')
//         console.log('write complete');
//         await fsPromises.appendFile(path.join(__dirname, 'file', 'sub.txt'), '\n\n Thank you ')
//         console.log('append complete');
//         // fs.rename(path.join(__dirname, 'file', 'sub.txt'), path.join(__dirname, 'file', 'thanks.txt'))
//         // console.log('rename complete');

//         fsPromises.unlink(path.join(__dirname, 'file', 'sub.txt'))
//     }catch (err) {
//         console.error(data)
//     }
// }
// fileOps()


// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

const http = require('http')
const PORT = 3000
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error,data) => {
        if(error) {
            res.writeHead(404)
            res.write('page not found')
        }else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, (error) => {
    if(error) {
        console.log(error)
    }else {
        console.log('Server is running on ' + PORT)
    }
})