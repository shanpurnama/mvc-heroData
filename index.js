var process = require('process')
var  fs = require('fs')
var command = process.argv.slice(2)
var controller = require('./controller')


if (command[0] === 'read') {
    controller.getDataHero()
} else if (command[0] === 'create') {
    controller.createDataHero(command[1], command[2], command[3], command[4]) 
} else if (command[0] === 'delete') {
    controller.deleteDataHero(command[1])
} else if (command[0] === 'update') {
    controller.updateDataHero(command[1], command[2], command[3], command[4], command[5])
} else {
    console.log('=> READ', '- USER must find a way to get data to read.')
    console.log('=> CREATE', '- USER should search how to get heroID, newHeroName, newHeroAvatar, newHeroRole and newHeroSpecially before user set.')
    console.log('=> DELETE', '- USER must input and find heroId before they execute.')
    console.log('=> UPDATE', 'USER must set heroId to change to new data')
}