import { UI } from "./DOMEvents";
import { Project } from "./project.js";

const saveTaskToLocalStorage = (task) => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        UI.addTask(task);
        if(task.project !== 'Inbox') {
            UI.addNewProject(new Project(task.project));
        };
    })
}

const clearLocalStorage = (task) => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {  
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    let index = task.parentElement.children[0].textContent;
    for(let x in tasks) {
        if(tasks[x].title === index) {
            tasks.splice(x,1)
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { saveTaskToLocalStorage, getTasks, clearLocalStorage };