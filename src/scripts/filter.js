const filterByProject = (e) => {
    const tasks = document.querySelectorAll('.card')
    tasks.forEach(card => {
        if(card.children[1].children[1].textContent !== e.value) {
            card.classList.add('hidden');
        }
    });
}

export { filterByProject }