"use strict"

var prompt = require('prompt');

prompt.start();

function listUsers() {
    users.forEach(function(user, index, users) {
        printUser(user);
    });
}

function addUser() {
    prompt.get(['id', 'name', 'email'], function (err, result) {
        var user = {};
        user.id = result.id;
        user.name = result.name;
        user.email = result.email;
        users.push(user);
        promptMenu();
    });
}

function printUser(user) {
    console.log('id: ', user.id, ' name: ', user.name, ' email ', user.email);
}

function getUser() {
    console.log('Enter id of wanted user: ');
    prompt.get(['id'], function (err, result) {
        users.forEach(function(user, index, users) {
            if (user.id == result.id) {
                return user;
            }
        });
        promptMenu();
    });
}



function removeUser() {
    console.log('Enter id of the user you want to remove');
    prompt.get(['id'], function (err, result) {
        users.forEach(function(user, index, users) {
            if (user.id == result.id) {
                users.splice(index, 1);
            }
        });
        promptMenu();
    });
}

function updateUsers() {
    console.log('Enter id, field you want to change and its new value');
    prompt.get(['id', 'field', 'value'], function (err, result) {
        users.forEach(function(user, index, users) {
            if (user.id == result.id) {
                if (result.field == 'name') {
                    user.name = result.value;
                } else if (result.field == 'email') {
                    user.email = result.value;
                } else {
                    console.log('Wrong field!');
                }
            }
        });
        promptMenu();
    });
}

// console.reset = function () {
//   return process.stdout.write(parseInt('/033', 8));
// }

function promptMenu() {
    prompt.get(['command'], function (err, result) {
        switch (result.command) {
            case 'list':
                console.log('Users:');
                listUsers();
                promptMenu();
                break;
            case 'add':
                addUser();
                break;
            case 'get':
                printUser(getUser());
                break;
            case 'remove':
                removeUser();
                break;
            case 'update' :
                updateUsers();
                break;
            case 'quit':
                console.log('Bye!');
                return;
            default:
                console.log('Wrong command');
                promptMenu();
        }
    });
}

var users = [];
console.log('Menu:\nlist\nadd\nget\nremove\nupdate\nquit');
promptMenu();
