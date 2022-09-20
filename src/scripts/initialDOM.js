export const DOM_CONTENT = () => {
    const content = document.querySelector('#content');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header-container';
        header.innerHTML = ``;
        content.appendChild(header);
    })();

    const createMain = (() => {
        const main = document.createElement('main');
        main.className = 'main-container';
        main.innerHTML = `
        <section class='side-bar-container'>
            <h3 class='group-title' id='filter-title'>Filter</h3>
            <button class='btn' id='inbox-btn'>Inbox</button>
            <button class='btn' id='today-btn'>Today</button>
            <button class='btn' id='upcoming-btn'>Upcoming</button>
            <h3 class='group-title' id='projects-title'>Projects</h3>
            <button class='btn' id='new-project-btn'>New project</button>
            <div id='projects-list'></div>
        </section>
        <section class='tasks-container'>
            <button class='btn' id='add-new-task-btn'>Add new task</button>
        </section>
        `;
        content.appendChild(main);
    })();
};