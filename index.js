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
    var commandRead = [
        'command for read',
        'the first <user> will make create a function readFile with promise to get data to read>',
        'if succesfuly, that will go to .then, if err, that will go to run .catch'
    ]
    console.log(commandRead)
    var commandCreate = [
        '<command for creat>',
        '<user> <create if and else with command in index.js>',
        '<create a function with name createDatahero in controller.js and then enter the parameter>',
        '<after that, user back in indexJS, and then call the function in controller.js>',
        '<next create a function read and write in model.js with syntax promise>',
        '<at controller, call the function in model.js, and then, in .then create a objec with set a heroID, heroName, heroAvatar, heroRole, and heroSpecially>',
        '<after that create .then and .catch for indicating, if succesfully it will go to .then, and if err, it will go to .catch>'
    ]
    console.log(commandCreate)
    var commandDelete = [
        'command for delete',
        '<create command with if else in index.js>',
        '<create a function in controller with name deleteHero and enter parameter heroId>',
        '<call the function in controller at index.js>',
        '<create function in model then call at controller>',
        '<create a loop for for indicating heroID that will to delete>',
        '<if succesfully to delete, that will go to .then, if err that will go to .catch>'
    ]
    var commandUpdate = [
        'command for update',
        '<create command with if else in index.js>',
        '<create a function with name updateHero in controller then enter the parameter and then call the function in index.js>',
        '<create a function read and write in model after that call in controller>',
        '<after that user must looping to set heroID to change to the new data, that enter heroName, heroAvatar, heroRole and heroSpecially>',
        '<if succesfuly to run, that will go to .then, if error, that will go to .catch>'
    ]
}