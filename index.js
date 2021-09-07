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
} else {
    
}