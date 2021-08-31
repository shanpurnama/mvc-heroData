var fs = require('fs')

function readFile() {
    // console.log('masuk')
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

module.exports = {
    readFile
}