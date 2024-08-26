const { format } = require('date-fns')

const {v4 : uuid} = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dataTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${dataTime}\t ${uuid()} \t ${message}\n`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs','eventFile.txt'), logItem)

    }catch (err) {
        console.error(err)
    }
}

module.exports = logEvents
// console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'))

// console.log(uuid())