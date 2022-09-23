import { Task } from './task.js';
import { Project } from './project.js';

class UI {
    
    // displays the newly added task on the tasks list
    static addTask(task) {
        const tasksContainer = document.querySelector('.tasks-container');
        const card = document.createElement('div');
        card.innerHTML = `
        <div class='card-top'>
            <h3 class='card-property card-title'>${task.title}</h3>
            <h3 class='card-property card-due-date'>${task.dueDate}</h3>
            <button class='details-btn'>Details</button>
            <button class='delete-btn'>Delete</button>
        </div>
        <div class='card-bottom hidden'>
            <h3 class='card-property card-description'>${task.description}</h3>
            <h3 class='card-property card-project'>${task.project}</h3>
            <h3 class='card-property card-priority'>${task.priority}</h3>
            <button class='edit-btn'>Edit</button>
        </div>
        `
        card.classList.add('card', task.priority);
        tasksContainer.appendChild(card);
        UI.removeForm();
    };

    // creates the popup form at top of the tasks list
    static createForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.createElement('form');
        const projectSelect = document.createElement('select');
        const options = ['Inbox', ...document.querySelector('#projects-list').children];
        options.forEach(op => {
            const option = document.createElement('option');
            option.value = op.value || op;
            option.textContent = op.value || op;
            projectSelect.appendChild(option);
        });
        form.innerHTML = `
        <input type='text' id='form-task-title' placeholder='Title'>
        <input type='text' id='form-task-description' placeholder='Description'>
        <input type='date' id='form-task-due-date'>
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
        tasksContainer.insertAdjacentElement('afterbegin', form);
    }

    // removes form
    static removeForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.querySelector('.task-form');
        const addNewTaskBtn = document.querySelector('#add-new-task-btn');
        const card = document.querySelector('.edited');
        if(tasksContainer.children[0] === form) { //if the first child of tasksContainer is form
            form.remove(); // remove the form
            UI.toggleHiddenElement(addNewTaskBtn);
            if(card) card.classList.remove('edited');
        }
    }

    // changes form values to card being edited
    static editForm(e) {
        const title = document.querySelector('#form-task-title');
        const description = document.querySelector('#form-task-description');
        const dueDate = document.querySelector('#form-task-due-date');
        const project = document.querySelector('#form-task-project');
        const priority = document.querySelector('#form-task-priority');
        title.value = e.children[0].children[0].textContent;
        description.value = e.children[1].children[0].textContent;
        dueDate.value = e.children[0].children[1].textContent;
        project.value = e.children[1].children[1].textContent;
        priority.value = e.children[1].children[2].textContent;
    }

    // toggles elements display (show/hide)
    static toggleHiddenElement(e) {
        if(e.classList.contains('hidden')) {
            e.classList.remove('hidden');
        } else {
            e.classList.add('hidden');
        }
    }

    // creates form and/or changes from values to card being edited
    static editTask(e) {
        e.classList.add('edited');
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.querySelector('.task-form');
        const addNewTaskBtn = document.querySelector('#add-new-task-btn');
        const confirmEditBtn = document.createElement('button');
        confirmEditBtn.setAttribute('id', 'confirm-edit-btn');
        confirmEditBtn.innerHTML = 'Confirm edit';
        if(tasksContainer.children[0] !== form) {
            this.createForm();
            this.toggleHiddenElement(addNewTaskBtn);
        }
        if(document.querySelector('#addTaskFormBtn')) document.querySelector('#addTaskFormBtn').replaceWith(confirmEditBtn);
        this.editForm(e);
    }

    // applies form details to edited card
    static confirmEdit() {
        const card = document.querySelector('.edited');
        const title = document.querySelector('#form-task-title');
        const description = document.querySelector('#form-task-description');
        const dueDate = document.querySelector('#form-task-due-date');
        const project = document.querySelector('#form-task-project');
        const priority = document.querySelector('#form-task-priority');
        card.children[0].children[0].textContent = title.value;
        card.children[1].children[0].textContent = description.value;
        card.children[0].children[1].textContent = dueDate.value;
        card.children[1].children[1].textContent = project.value;
        card.children[1].children[2].textContent = priority.value;
        this.removeForm();
    }

    // creates a form for a new project
    static createNewProjectForm() {
        const container = document.querySelector('.side-bar-container');
        const newProjectBtn = document.querySelector('#new-project-btn')
        const form = document.createElement('form');
        form.innerHTML = `
        <input type='text' id='new-project-name' placeholder='Project name'>
        <button id='add-project-btn'>Add</button>
        <button id='cancel-project-btn'>Cancel</button>
        `
        form.classList.add('form-project')
        container.insertBefore(form, newProjectBtn)
        this.toggleHiddenElement(newProjectBtn);
    }
    
    // creates a new project
    static addNewProject() {
        const list = document.querySelector('#projects-list');
        const newProjectBtn = document.querySelector('#new-project-btn')
        const projectItem = document.createElement('button');
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.textContent = 'X';
        deleteProjectBtn.classList.add('deleteProjectBtn')
        const projectTitle = document.querySelector('#new-project-name').value;
        if(projectTitle === '') return;
        projectItem.value = projectTitle;
        projectItem.textContent = projectTitle;
        projectItem.appendChild(deleteProjectBtn);
        list.appendChild(projectItem);
        this.toggleHiddenElement(newProjectBtn);
        this.removeProjectForm();
    }

    static removeProjectForm() {
        const form = document.querySelector('.form-project');
        form.remove();
    }

    static deleteProject(project) {
        project.remove();
    }

    static changeProjectAfterDeletion(project) {
        const projectName = project.value;
        const projects = document.querySelectorAll('.card-project');
        projects.forEach(project => {
            if(project.textContent.includes(projectName)) {
                project.parentElement.parentElement.remove();
            }
        })
    }
}

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
            if(title === '') return console.log('Title cannot be empty');
            if(title === 'Inbox') return console.log('Title cannot be Inbox');
            if(priority === '') return console.log('Please select a priority');
            UI.addTask(task);
            console.log('Task created');
        }
        if(e.target.matches('#add-new-task-btn')) { // create form
            UI.toggleHiddenElement(e.target);
            UI.createForm();
            console.log('Form created');
        }
        if(e.target.matches('#cancelTaskFormBtn')) { // cancel form
            e.preventDefault()
            UI.removeForm();
            console.log('Form cancelled');
        }

        if(e.target.matches('.details-btn')) { // toggles card details visibility
            UI.toggleHiddenElement(e.target.parentElement.nextElementSibling)
        }
        if(e.target.matches('.delete-btn')) { // deletes card completely
            const card = e.target.parentElement.parentElement;
            card.remove();
            console.log('Card removed');
        }
        if(e.target.matches('.edit-btn')) { // edits card details
            const card = e.target.parentElement.parentElement;
            UI.editTask(card);
        }
        if(e.target.matches('#confirm-edit-btn')) {
            e.preventDefault();
            UI.confirmEdit();
        }
        if(e.target.matches('#new-project-btn')) {
            UI.createNewProjectForm();
        }
        if(e.target.matches('#add-project-btn')) {
            e.preventDefault();
            UI.addNewProject();
        }
        if(e.target.matches('#cancel-project-btn')) {
            e.preventDefault();
            UI.removeProjectForm();
            UI.toggleHiddenElement(document.querySelector('#new-project-btn'));
        }
        if(e.target.matches('.deleteProjectBtn')) {
            const project = e.target.parentElement; // targets the project button
            UI.deleteProject(project);
            UI.changeProjectAfterDeletion(project);
        }
    })
}

export { UI, DOM_EVENTS }