var fs = require('fs')
function getDataHero() {
    // console.log('succes to run this function')
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
               if (err) {
                   console.log(err, 'This is eror!')
               } else {
                   var dataHero = JSON.parse(data)
                   console.log(dataHero)
               }
           })
}

function createDataHero(heroName, heroAvatar, heroRole, heroSpecially) {
    // console.log('code here to create data hero')
    console.log(heroName, heroAvatar, heroRole, heroSpecially)
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            var dataJson = JSON.parse(data)
                var newDataHero = {
                    hero_id: dataJson.hero[dataJson.hero.length -1].hero_id + 1,
                    hero_name: heroName,
                    hero_avatar: heroAvatar,
                    hero_role: heroRole,
                    hero_specially: heroSpecially
                }

            dataJson.hero.push(newDataHero)
            var dataStringify = JSON.stringify(dataJson)
            // fs.writeFile('./db/heroData.json', dataStringify, 'utf-8', function(err) {
            //     if (err) {
            //         console.log(err)
            //     }
            //     console.log('successfuly add new data')
            // })
        }
    })
    
}

function deleteDataHero(heroId) {
    // console.log('this metode to delete')
    console.log(heroId)
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err, 'This is eror!')
        } else {
            var dataJsonParse = JSON.parse(data)
            for (var i = 0; i < dataJsonParse.hero.length; i++) {
                if(heroId === dataJsonParse.hero[i].hero_id.toString()) {
                    dataJsonParse.hero.splice(i, 1)
                }
            }
            var dataStringify = JSON.stringify(dataJsonParse)
            // fs.writeFile('./db/heroData.json', dataStringify, 'utf-8', function(err) {
            //     if (err) {
            //         console.log(err, 'This is eror!')
            //     }
            //     console.log('success')
            // })
        } 
    })
    
}

function updateDataHero(heroId, heroName, heroAvatar, heroRole, heroSpecially) {
    // console.log('here to update data')
    // console.log(heroId, heroName, heroAvatar, heroRole, heroSpecially)
    fs.readFile('./db/heroData.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err, 'This is eror!')
        } else {
            var newDataUpdate = JSON.parse(data)
            for (var i = 0; i < newDataUpdate.hero.length; i++) {
                if (heroId === newDataUpdate.hero[i].hero_id.toString()) {
                    // console.log(newDataUpdate.hero[i])
                newDataUpdate.hero[i].hero_name = heroName
                newDataUpdate.hero[i].hero_avatar = heroAvatar
                newDataUpdate.hero[i].hero_role = heroRole
                newDataUpdate.hero[i].hero_specially = heroSpecially
                // console.log(newDataUpdate.hero[i])
                }
            }

            // console.log(newDataUpdate.hero)
            var dataStringify = JSON.stringify(newDataUpdate)
            // fs.writeFile('./db/heroData.json', dataStringify, 'utf-8', function(err) {
            //     if (err) { 
            //         console.log(err, 'error ')
            //     }
            //     console.log('Success to run')
            // })
        }
    })

}

module.exports = {
    getDataHero,
    createDataHero,
    deleteDataHero,
    updateDataHero
}