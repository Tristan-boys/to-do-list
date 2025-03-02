const searchTaskButton = document.querySelector('#searchTaskButton')

const searchTask = (searchTextTask) => {
    const sessionTasks = sessionListTask();
    displayTask(sessionTasks.filter((task) => task.title.toLowerCase().includes(searchTextTask.value.toLowerCase()) || task.description.toLowerCase().includes(searchTextTask.value.toLowerCase())));
}

searchTaskButton.addEventListener('click', () => {
    searchTask(document.querySelector('#searchTaskText'));
})

const searchTextTask = document.querySelector('#searchTaskText');
searchTextTask.addEventListener('input', (event) => {
    searchTask(event.target);
})