const process = require('process')
const fs = require('fs')
var command = process.argv.slice(2)
// console.log(command[0])

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
    // var newDataHero = {
    //     hero_id: dataJson.hero[0].hero_id,
    //     hero_name: command[1],
    //     hero_avatar: command[2],
    //     hero_role: command[3],
    //     hero_specially: command[4]
    // }
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            var dataJson = JSON.parse(data)
            var newDataHero = {
                hero_id: dataJson.hero.length,
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
}

// delete