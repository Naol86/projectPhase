"use strict";
const readline = require('readline');
const readWrite = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let id = 1;
const getNewId = () => id++;
const tasks = [];
function main() {
    console.log('Welcome to TODO App');
    console.log('1. Add Task', '2. View Task', '3. Remove Task', '4. Edit', '5. Exit');
    readWrite.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                addTaskHandler();
                break;
            case '2':
                viewTaskHandler();
                break;
            case '3':
                removeTaskHandler();
                break;
            case '4':
                editTaskHandler();
                break;
            case '5':
                readWrite.close();
                break;
            default:
                console.log('Invalid choice');
                main();
                break;
        }
    });
}
function addTaskHandler() {
    readWrite.question('Enter Task Title: ', (title) => {
        tasks.unshift({ id: getNewId(), title });
        console.clear();
        console.log('Task added successfully');
        main();
    });
}
function viewTaskHandler() {
    console.clear();
    console.log('Task List');
    tasks.forEach((task, index) => {
        console.log(`Task Id: ${index}, Task Title: ${task.title}`);
    });
    main();
}
function removeTaskHandler() {
    readWrite.question('Enter Task Id to remove: ', (taskId) => {
        const taskIndex = Number(taskId);
        if (taskIndex < 0 || taskIndex >= tasks.length) {
            console.log('Task not found');
        }
        else {
            tasks.splice(taskIndex, 1);
            console.clear();
            console.log('Task removed successfully');
        }
        main();
    });
}
function editTaskHandler() {
    readWrite.question('Enter Task Id to edit: ', (taskId) => {
        const taskIndex = Number(taskId);
        if (taskIndex < 0 || taskIndex >= tasks.length) {
            console.clear();
            console.log('Task not found');
            main();
        }
        else {
            readWrite.question('Enter new Task Title: ', (title) => {
                tasks[taskIndex].title = title;
                console.clear();
                console.log('Task edited successfully');
                main();
            });
        }
    });
}
main();
