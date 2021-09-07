var fs = require('fs')
var model = require('./model')


function createUserData(userName, userPassword) {
    model.readAllData('userData')
        .then(data => {
            var newDataUser = {
                user_id: data.user[data.user.length -1].user_id +1,
                user_name: userName,
                password: userPassword,
                user_role: 'user'
            }
            data.user.push(newDataUser)
            var dataUserStringify = JSON.stringify(data)
            return model.writeAllData('userData', dataUserStringify)
        })
        .then(() => {
            console.log('succes added new user')
        })
        .catch(err => {
            console.log(err)
        })
}

function getDataHero(userName, userPassword) {
    model.readAllData('userData')
        .then(data => {
            var isThereAUsername = false
            for (var i = 0; i < data.user.length; i++) {
                if (userName === data.user[i].user_name && userPassword === data.user[i].password) {
                    isThereAUsername = true
                }
            }
            if (isThereAUsername === true) {
                return model.readAllData('heroData')
            } else {
                console.log('wrong username and password')
            }
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function createDataHero(userName, userPassword, heroName, heroAvatar, heroRole, heroSpecially) {
    return model.readAllData('userData')
        .then(data => {
            var isThereAUsername = false
            for (var i = 0; i < data.user.length; i++) {
                if (userName === data.user[i].user_name && userPassword === data.user[i].password) {
                    isThereAUsername = true
                }
            }
            if (isThereAUsername === true) {
                return model.readAllData('heroData')
            } else {
                console.log('wrong username and password')
            }
        })
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
            return model.writeAllData('heroData', dataStringify)
        })
        .then(()=> {
            console.log('succesfully added new data')
        })
        .catch(err => {
            console.log(err)
        })
}

function deleteDataHero(userName, userPassword, heroId) {
    model.readAllData('userData')
        .then(data => {
            var isThereAUsername = false
            for (var i = 0; i < data.user.length; i++) {
                if (userName === data.user[i].user_name && userPassword === data.user[i].password && data.user[i].user_role === 'admin') {
                    isThereAUsername = true
                    console.log('masuk')
                } 
            }
            if (isThereAUsername === true) {
                return model.readAllData('heroData')
            } else {
                console.log('wrong username and password')
            }
        })
        .then(data => {
            var isExistHeroId = false
            for (var i = 0; i < data.hero.length; i++) {
                if (heroId === data.hero[i].hero_id.toString()) {
                    data.hero.splice(i, 1)
                    isExistHeroId = true
                }
            }
            if (isExistHeroId === true) {
                var dataStringify = JSON.stringify(data)
                return model.writeAllData('heroData', dataStringify)
            } else {
                console.log('hero id not found, please use different hero id')
            }
        })
        .then(() => {
            console.log('succes delete hero by heroId')
        })
        .catch(err => {
            console.log(err)
        })
}

function updateDataHero(userName, password, heroId, heroName, heroAvatar, heroRole, heroSpecially) {
    model.readAllData('userData')
        .then(data => {
            var isThereAUsername = false
            for (var i = 0; i < data.user.length; i++) {
                if (userName === data.user[i].user_name && password === data.user[i].password) {
                    isThereAUsername = true
                }
            }
            if (isThereAUsername === true) {
                return model.readAllData('heroData')
            } else {
                console.log('wrong username and password')
                return
            }
        })
        .then(data => {
            var isExistHeroId = false
            for (var i = 0; i < data.hero.length; i++) {
                if (heroId === data.hero[i].hero_id.toString()) {
                    data.hero[i].hero_name = heroName
                    data.hero[i].hero_avatar = heroAvatar
                    data.hero[i].hero_role = heroRole
                    data.hero[i].hero_specially = heroSpecially
                    isExistHeroId = true
                }
            }
            if (isExistHeroId === true) {
                var dataStringify = JSON.stringify(data)
                return model.writeAllData('heroData', dataStringify)
            } else {
                console.log('hero id not found, please use different hero id')
            }
        })
        .then(() => {
            console.log('succes update new data')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    createUserData,
    getDataHero,
    createDataHero,
    deleteDataHero,
    updateDataHero
}