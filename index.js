var process = require('process')
var  fs = require('fs')
var command = process.argv.slice(2)
var controller = require('./controller')

if (command[0] === 'register') {
    controller.createUserData(command[1], command[2])
}if (command[2] === 'read') {
    controller.getDataHero(command[0], command[1])
} else if (command[2] === 'create') {
    controller.createDataHero(command[0], command[1], command[3], command[4], command[5], command[6]) 
} else if (command[2] === 'delete') {
    controller.deleteDataHero(command[0], command[1], command[3])
} else if (command[2] === 'update') {
    controller.updateDataHero(command[0],command[1], command[3], command[4], command[5], command[6], command[7])
} else if (command[2] === 'help') {
    controller.forHelp(command[0], command[1])
    console.log('====== register ======')
    console.log('user will create a new user to user data')
    console.log('<register> <userID> <userName> <password> <userRole>')
    console.log('')
    console.log('====== read ======')
    console.log('user will read data from data base if true')
    console.log('<userName> <userPassword> <read>')
    console.log('')
    console.log('====== create ======')
    console.log('user will create new data hero from create to data')
    console.log('<userName> <userPassword> <create> <heroId> <heroName> <heroAvatar> <heroRole> <heroSpeacilly>')
    console.log('')
    console.log('====== delete ======')
    console.log('user must input userName and userPassword when user will delete, and then user must admin')
    console.log('<userName> <userPassword> <delete> <userName> <userPassword> <user_role = admin>')
    console.log('')
    console.log('====== update ======')
    console.log('this program user will update data hero from data base')
    console.log('<userName> <userPassword> <update> <heroId> <heroName> <heroAvatar> <heroSpecially>')
    console.log('')
}