import { isToday, isThisWeek } from 'date-fns'


const resetFilter = () => {
    const tasks = document.querySelectorAll('.card')
    tasks.forEach(card => {
        card.classList.remove('hidden');
    });
}

const filterByProject = (e) => {
    resetFilter();
    const tasks = document.querySelectorAll('.card')
    tasks.forEach(card => {
        if(card.children[1].children[1].textContent !== e.value) {
            card.classList.add('hidden');
        }
    });
}

const todayTask = () => {
    resetFilter();
    const tasks = document.querySelectorAll('.card')
    tasks.forEach(card => {
        let result = isToday(new Date(card.children[0].children[1].textContent));
        if(!result) {
            card.classList.add('hidden');
        }
    });
}

const weekTask = () => {
    resetFilter();
    const tasks = document.querySelectorAll('.card')
    tasks.forEach(card => {
        let result = isThisWeek(new Date(card.children[0].children[1].textContent));
        if(!result) {
            card.classList.add('hidden');
        }
    });
}

export { resetFilter, filterByProject, todayTask, weekTask }