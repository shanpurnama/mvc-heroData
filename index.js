const process = require('process')
const fs = require('fs')
const { clear } = require('console')
var command = process.argv.slice(2)


if (command[0] === 'read') {
   fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
       if (err) {
           console.log(err)
       } else {
           var dataHero = JSON.parse(data)
           console.log(dataHero)
       }
   })

} else if (command[0] === 'write') {
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            var dataJson = JSON.parse(data)
            // console.log(dataJson.hero[dataJson.hero.length -1].hero_id + 1)

                var newDataHero = {
                    hero_id: dataJson.hero[dataJson.hero.length -1].hero_id + 1,
                    hero_name: command[1],
                    hero_avatar: command[2],
                    hero_role: command[3],
                    hero_specially: command[4]
                }

            dataJson.hero.push(newDataHero)
            var dataStringify = JSON.stringify(dataJson)
            fs.writeFile('./db/heroData.json', dataStringify, 'utf-8', function(err) {
                if (err) {
                    console.log(err)
                }
                console.log('successfuly add new data')
            })
        }
    })
    
} else if (command[0] === 'delete') {
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err, 'error nih bos')
        } else {
            var dataJsonParse = JSON.parse(data)
            for (var i = 0; i < dataJsonParse.hero.length; i++) {
                if(command[1] === dataJsonParse.hero[i].hero_id.toString()) {
                    dataJsonParse.hero.splice(i, 1)
                }
            }

            var dataStringify = JSON.stringify(dataJsonParse.hero)
            fs.writeFile('./db/heroData1.json', dataStringify, 'utf-8', function(err) {
                if (err) {
                    console.log(err, 'err')
                }
                console.log('berhasil boss')
            })
        } 
    })
} else if (command[0] === 'update') {
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err, 'error ini bos')
        } else {
            var newDataUpdate = JSON.parse(data)
            for (var i = 0; i < newDataUpdate.hero.length; i++) {
                if (command[1] === newDataUpdate.hero[i].hero_id.toString()) {
                newDataUpdate.hero[i].hero_name = command[2]
                newDataUpdate.hero[i].hero_avatar = command[3]
                newDataUpdate.hero[i].hero_role = command[4]
                newDataUpdate.hero[i].hero_specially = command[5]
                // console.log(newDataUpdate.hero[i])
                }
            }

            // console.log(newDataUpdate.hero)
            var dataStringify = JSON.stringify(newDataUpdate.hero)
            fs.writeFile('./db/heroData.json', dataStringify, 'utf-8', function(err) {
                if (err) {
                    console.log(err, 'error ')
                }
                console.log('berhasil nih')
            })
        }
    })

}