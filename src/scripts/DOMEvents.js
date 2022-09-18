import { Task } from './task.js';
import { Project } from './project.js';

class UI {
    
    // displays the newly added task on the tasks list
    static addTask(task) {
        const tasksContainer = document.querySelector('.tasks-container');
        const card = document.createElement('div');
        card.innerHTML = `
        <div class='card-show'>
            <h3>${task.title}</h3>
            <h3>${task.dueDate}</h3>
            <button>Details</button>
            <button>Delete</button>
        </div>
        <div class='card-hidden'>
            <h3>${task.description}</h3>
            <h3>${task.project}</h3>
            <h3>${task.priority}</h3>
            <button>Edit</button>
        </div>
        `
        card.className('card', task.priority);
        tasksContainer.appendChild(card);
    };

    // creates the popup form at top of the tasks list
    static createForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.createElement('form');
        const projectSelect = document.createElement('select');
        const options = ['Inbox', ...document.querySelector('#projects-list').children]
        options.forEach(op => {
            const option = document.createElement('option');
            option.value = op.textContent || op;
            option.textContent = op.textContent || op;
            projectSelect.appendChild(option);
        })
        form.innerHTML = `
        <input type='text' id='task-title' placeholder='Task title'>
        <input type='text' id='task-description' placeholder='Task description'>
        <input type='text' id='task-due-date' placeholder='Task due date'>
        <select>${projectSelect.innerHTML}</select>
        <select id='task-priority'>
            <option value=''>Select priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
        </select>
        <button id='addTaskFormBtn'>Add</button>
        <button id='cancelTaskFormBtn'>Cancel</cancel>
        `
        tasksContainer.appendChild(form);
    }
};

const DOM_EVENTS = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches('#addTaskFormBtn')) {
            const title = document.querySelector('#task-title').value;
            const description = document.querySelector('#task-description').value;
            const dueDate = document.querySelector('#task-due-date').value;
            const project = document.querySelector('#task-project').value;
            const priority = document.querySelector('#task-priority').value;
            const task = new Task(title, description, dueDate, priority, project);
            UI.addTask(task);
            console.log('Task added successfully)');
        }
        if(e.target.matches('#add-new-task-btn')) {
            UI.createForm();
        }
    })
}

export { UI, DOM_EVENTS }