import { Task } from './task.js';
import { Project } from './project.js';

class UI {
    
    // displays the newly added task on the tasks list
    static addTask(task) {
        const tasksContainer = document.querySelector('.tasks-container');
        const card = document.createElement('div');
        card.innerHTML = `
        <div class='card-show'>
            <h3 class='task-property'>${task.title}</h3>
            <h3 class='task-property'>${task.dueDate}</h3>
            <button class='details-btn'>Details</button>
            <button class='delete-btn'>Delete</button>
        </div>
        <div class='card-hidden'>
            <h3 class='task-property'>${task.description}</h3>
            <h3 class='task-property'>${task.project}</h3>
            <h3 class='task-property'>${task.priority}</h3>
            <button class='edit-btn'>Edit</button>
        </div>
        `
        card.classList.add('card', task.priority);
        tasksContainer.appendChild(card);
    };

    // creates the popup form at top of the tasks list
    static createForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.createElement('form');
        const projectSelect = document.createElement('select');
        const options = ['Inbox', ...document.querySelector('#projects-list').children];
        options.forEach(op => {
            const option = document.createElement('option');
            option.value = op.textContent || op;
            option.textContent = op.textContent || op;
            projectSelect.appendChild(option);
        });
        form.innerHTML = `
        <input type='text' id='form-task-title' placeholder='Task title'>
        <input type='text' id='form-task-description' placeholder='Task description'>
        <input type='text' id='form-task-due-date' placeholder='Task due date'>
        <select id='form-task-project'>${projectSelect.innerHTML}</select>
        <select id='form-task-priority'>
            <option value=''>Select priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
        </select>
        <button id='addTaskFormBtn'>Add</button>
        <button id='cancelTaskFormBtn'>Cancel</cancel>
        `
        form.classList.add('task-form');
        tasksContainer.appendChild(form);
    }

    // removes form
    static removeForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.querySelector('.task-form');
        if(tasksContainer.children[1] === form) { //if the second child of tasksContainer is form
            form.remove(); // remove the form
        }
    }

    // toggles elements display (show/hide)
    static toggleHiddenElement(el) {
        if(el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }

};

const DOM_EVENTS = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches('#addTaskFormBtn')) { // apply form values to task 
            e.preventDefault();
            const title = document.querySelector('#form-task-title').value;
            const description = document.querySelector('#form-task-description').value;
            const dueDate = document.querySelector('#form-task-due-date').value;
            const project = document.querySelector('#form-task-project').value;
            const priority = document.querySelector('#form-task-priority').value;
            const task = new Task(title, description, dueDate, priority, project);
            UI.addTask(task);
            UI.removeForm();
            console.log('Task created');
        }
        if(e.target.matches('#add-new-task-btn')) { // create form
            UI.createForm();
            console.log('Form created');
        }
        if(e.target.matches('#cancelTaskFormBtn')) {
            e.preventDefault()
            UI.removeForm();
            console.log('Form cancelled')
        }
    })
}

export { UI, DOM_EVENTS }