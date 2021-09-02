var fs = require('fs')
var model = require('./model')


function getDataHero() {
    model.readFile()
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function createDataHero(heroName, heroAvatar, heroRole, heroSpecially) {
    model.readFile()
        .then(data => {
            var newDataHero = {
                hero_id: data.hero[data.hero.length -1].hero_id + 1,
                hero_name: heroName,
                hero_avatar: heroAvatar,
                hero_role: heroRole,
                hero_specially: heroSpecially
            }
            data.hero.push(newDataHero)
            var dataStringify = JSON.stringify(data)
            model.writeFile(dataStringify)
        })
        .then(data => {
            console.log('succesfuly added new data')
        })
        .catch(err => {
            console.log(err)
        })
}

function deleteDataHero(heroId) {
    model.readFile()
        .then(data => {
            var isExistHeroId = false
            for (var i = 0; i < data.hero.length; i++) {
                if (heroId === data.hero[i].hero_id.toString()) {
                    data.hero.splice(i, 1)
                    isExistHeroId = true
                }
            }
            if (isExistHeroId) {
                var dataStringify = JSON.stringify(data)
                model.writeFile(dataStringify)
                    .then(data => {
                        console.log('succes delete hero by heroId')
                    })
            } else {
                console.log('hero id not found, please use different hero id')
            }
        })
        .catch(err => {
            console.log(err)
        })
}

function updateDataHero(heroId, heroName, heroAvatar, heroRole, heroSpecially) {
    model.readFile()
        .then(data => {
            var flaging = false
            for (var i = 0; i < data.hero.length; i++) {
                if (heroId === data.hero[i].hero_id.toString()) {
                    data.hero[i].hero_name = heroName
                    data.hero[i].hero_avatar = heroAvatar
                    data.hero[i].hero_role = heroRole
                    data.hero[i].hero_specially = heroSpecially
                    flaging = true
                }
            }
            if (flaging === true) {
            var dataStringify = JSON.stringify(data)
            model.writeFile(dataStringify)
                .then(data => {
                    console.log('succes update new data')
                })
            } else {
                console.log('hero id not found, please use different hero id')
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    getDataHero,
    createDataHero,
    deleteDataHero,
    updateDataHero
}