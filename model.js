const { resolveCname } = require('dns')
var fs = require('fs')

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
            if (err) {
                reject(err)
            } else {
                var dataHero = JSON.parse(data)
                resolve(dataHero)
            }
        })
    })
}
function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db/heroData.json', data, 'utf-8', function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
    
}

module.exports = {
    readFile,
    writeFile
}