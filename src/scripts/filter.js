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

export { resetFilter, filterByProject }