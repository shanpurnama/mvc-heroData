var fs = require('fs')
var model = require('./model')


// function createUserData(userName, userPassword) {
//     model.readAllData('userData')
//         .then(data => {
//             var newDataUser = {
//                 user_id: data.user[data.user.length -1].user_id +1,
//                 user_name: userName,
//                 password: userPassword,
//                 user_role: 'user'
//             }
//             data.user.push(newDataUser)
//             var dataUserStringify = JSON.stringify(data)
//             return model.writeAllData('userData', dataUserStringify)
//         })
//         .then(() => {
//             console.log('succes added new user')
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

async function createUserData(userName, userPassword) {
    try {
        var userData = await model.readAllData('userData')
        var newDataUser = {
            user_id: userData.user[userData.user.length -1].user_id +1,
            user_name: userName,
            password: userPassword,
            user_role: 'user'
        }
        userData.user.push(newDataUser)
        var dataUserStringify = JSON.stringify(userData)
        await model.writeAllData('userData', dataUserStringify)
        console.log('succes added new user')
    } catch(err) {
        console.log(err)
    }
}

// function getDataHero(userName, userPassword) {
//     model.readAllData('userData')
//         .then(data => {
//             var isThereAUsername = false
//             for (var i = 0; i < data.user.length; i++) {
//                 if (userName === data.user[i].user_name && userPassword === data.user[i].password) {
//                     isThereAUsername = true
//                 }
//             }
//             if (isThereAUsername === true) {
//                 return model.readAllData('heroData')
//             } else {
//                 console.log('wrong username and password')
//             }
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

async function getDataHero(userName, userPassword) {
    try {
        var userData = await model.readAllData('userData')
        var isThereAUsername = false
        for (var i = 0; i < userDataa.user.length; i++) {
            if (userName === userData.user[i].user_name && userPassword === userData.user[i].password) {
                isThereAUsername = true
            }
        }
        if (isThereAUsername === true) {
            var heroData = await model.readAllData('heroData')
            console.log(heroData)
        } else {
            console.log('wrong username and password')
        }
    } catch(err) {
        console.log(err)
    }

}

// function createDataHero(userName, userPassword, heroName, heroAvatar, heroRole, heroSpecially) {
//     return model.readAllData('userData')
//         .then(data => {
//             var isThereAUsername = false
//             for (var i = 0; i < data.user.length; i++) {
//                 if (userName === data.user[i].user_name && userPassword === data.user[i].password) {
//                     isThereAUsername = true
//                 }
//             }
//             if (isThereAUsername === true) {
//                 return model.readAllData('heroData')
//             } else {
//                 console.log('wrong username and password')
//             }
//         })
//         .then(data => {
//             var newDataHero = {
//                 hero_id: data.hero[data.hero.length -1].hero_id + 1,
//                 hero_name: heroName,
//                 hero_avatar: heroAvatar,
//                 hero_role: heroRole,
//                 hero_specially: heroSpecially
//             }
//             data.hero.push(newDataHero)
//             var dataStringify = JSON.stringify(data)
//             return model.writeAllData('heroData', dataStringify)
//         })
//         .then(()=> {
//             console.log('succesfully added new data')
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

async function createDataHero(userName, userPassword, heroName, heroAvatar, heroRole, heroSpecially) {
    try {
        var userData = await model.readAllData('userData')
        var isThereAUsername = false
        for (var i = 0; i < userData.user.length; i++) {
            if (userName === userData.user[i].user_name && userPassword === userData.user[i].password) {
                isThereAUsername = true
            }
        }
        if (isThereAUsername === true) {
            var heroData = await model.readAllData('heroData')
            var newDataHero = {
                hero_id: heroData.hero[heroData.hero.length -1].hero_id + 1,
                hero_name: heroName,
                hero_avatar: heroAvatar,
                hero_role: heroRole,
                hero_specially: heroSpecially
            }
            heroData.hero.push(newDataHero)
            var dataStringify = JSON.stringify(heroData)
            await model.writeAllData('heroData', dataStringify)
            console.log('success added new hero')
        } else {
            console.log('wrong username and password')
        }
    } catch(err){
        console.log(err)
    }
}

// function deleteDataHero(userName, userPassword, heroId) {
//     model.readAllData('userData')
//         .then(data => {
//             var isThereAUsername = false
//             for (var i = 0; i < data.user.length; i++) {
//                 if (userName === data.user[i].user_name && userPassword === data.user[i].password) {
//                     isThereAUsername = true
//                     var isAdmin = false
//                     if (data.user[i].user_role === 'admin') {
//                         isAdmin = true
//                     }
//                 }
//             }
//             if (isThereAUsername === true) {
//             } else {
//                 console.log('wrong username and password')
//             }
//             if (isAdmin === true) {
//                 return model.readAllData('heroData')
//             } else {
//                 console.log('you are not an admin, so you cant delete')
//             }
//         })
//         .then(data => {
//             var isExistHeroId = false
//             for (var i = 0; i < data.hero.length; i++) {
//                 if (heroId === data.hero[i].hero_id.toString()) {
//                     data.hero.splice(i, 1)
//                     isExistHeroId = true
//                 }
//             }
//             if (isExistHeroId === true) {
//                 var dataStringify = JSON.stringify(data)
//                 return model.writeAllData('heroData', dataStringify)
//             } else {
//                 console.log('hero id not found, please use different hero id')
//             }
//         })
//         .then(() => {
//             console.log('succes delete hero by heroId')
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

async function deleteDataHero(userName, userPassword, heroId) {
    try {
        var userData = await model.readAllData('userData')
        var isThereAUsername = false
        for (var i = 0; i < userData.user.length; i++) {
            if (userName === userData.user[i].user_name && userPassword === userData.user[i].password) {
                isThereAUsername = true
                var isAdmin = false
                if (userData.user[i].user_role === 'admin') {
                    isAdmin = true
                }
            }
        }
        if (isThereAUsername === true) {
            if (isAdmin === true) {
                var heroData = await model.readAllData('heroData')
                var isExistHeroId = false
                for (var i = 0; i < heroData.hero.length; i++) {
                    if (heroId === heroData.hero[i].hero_id.toString()) {
                        heroData.hero.splice(i, 1)
                        isExistHeroId = true
                    }
                }
                if (isExistHeroId === true) {
                    var dataStringify = JSON.stringify(heroData)
                    await model.writeAllData('heroData', dataStringify)
                    console.log('succes delete hero by hero id')
                } else {
                    console.log('hero id not found, please use different hero id')
                }
                
            } else {
                console.log('you are not an admin, so you cant delete')
            }
        } else {
            console.log('wrong username and password')
        }
    } catch(err) {
        console.log(err)
    }
}

// function updateDataHero(userName, password, heroId, heroName, heroAvatar, heroRole, heroSpecially) {
//     model.readAllData('userData')
//         .then(data => {
//             var isThereAUsername = false
//             for (var i = 0; i < data.user.length; i++) {
//                 if (userName === data.user[i].user_name && password === data.user[i].password) {
//                     isThereAUsername = true
//                 }
//             }
//             if (isThereAUsername === true) {
//                 return model.readAllData('heroData')
//             } else {
//                 console.log('wrong username and password')
//                 return
//             }
//         })
//         .then(data => {
//             var isExistHeroId = false
//             for (var i = 0; i < data.hero.length; i++) {
//                 if (heroId === data.hero[i].hero_id.toString()) {
//                     data.hero[i].hero_name = heroName
//                     data.hero[i].hero_avatar = heroAvatar
//                     data.hero[i].hero_role = heroRole
//                     data.hero[i].hero_specially = heroSpecially
//                     isExistHeroId = true
//                 }
//             }
//             if (isExistHeroId === true) {
//                 var dataStringify = JSON.stringify(data)
//                 return model.writeAllData('heroData', dataStringify)
//             } else {
//                 console.log('hero id not found, please use different hero id')
//             }
//         })
//         .then(() => {
//             console.log('succes update new data')
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

async function updateDataHero(userName, userPassword, heroId, heroName, heroAvatar, heroRole, heroSpecially) {
    try {
        var userData = await model.readAllData('userData')
        var isThereAUsername = false
        for (var i = 0; i < userData.user.length; i++) {
            if (userName === userData.user[i].user_name && userPassword === userData.user[i].password) {
                isThereAUsername = true
            }
        }
        if (isThereAUsername === true) {
            var heroData = await model.readAllData('heroData')
            var isExistHeroId = false
            for (var i = 0; i < heroData.hero.length; i++) {
                if (heroId === heroData.hero[i].hero_id.toString()) {
                    heroData.hero[i].hero_name = heroName
                    heroData.hero[i].hero_avatar = heroAvatar
                    heroData.hero[i].hero_role = heroRole
                    heroData.hero[i].hero_specially = heroSpecially
                    isExistHeroId = true
                }
            }
            if (isExistHeroId === true) {
                var dataStringify = JSON.stringify(heroData)
                await model.writeAllData('heroData', dataStringify)
                console.log('succes update new data')
            } else {
                console.log('hero id not found, please use different hero id')
            }
        } else {
            console.log('wrong username and password')
        }
    } catch(err) {
        console.log(err)
    }
}


module.exports = {
    createUserData,
    getDataHero,
    createDataHero,
    deleteDataHero,
    updateDataHero,
}