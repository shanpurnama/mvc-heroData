const { resolveCname } = require('dns')
var fs = require('fs')

function readFileHero() {
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

function writeFileHero(data) {
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

function readDataUser() {
    return new Promise((resolve, reject) => {
        fs.readFile('./db/userData.json', 'utf-8', function(err, data) {
            if (err) {
                reject(err)
            } else {
                var dataUser = JSON.parse(data)
                resolve(dataUser)
            }
        })
    })
}

function writeDataUser(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db/userData.json', data, 'utf-8', function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}



module.exports = {
    readFileHero,
    writeFileHero,
    readDataUser,
    writeDataUser
}