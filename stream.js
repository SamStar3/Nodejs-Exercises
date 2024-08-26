const fs = require('fs')
// const path = require('path')
// const rs = fs.createReadStream(path.join(__dirname, 'file', 'bigfile.txt'), {encoding: 'utf8'})
// const ws = fs.createWriteStream(path.join(__dirname,'file','newbigfile.txt'))

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

// rs.pipe(ws)

if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if(err) throw err 
        console.log('directory created')
    })
}

if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if(err) throw err 
        console.log('directory created')
    })
}

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})