const searchTaskButton = document.querySelector('#searchTaskButton');

/**
 * Cherche le texte du paramètre dans la liste de tasks du user connecté.
 */
const searchTask = (searchTextTask) => {
    const sessionTasks = sessionListTask();
    displayTask(sessionTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTextTask.value.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTextTask.value.toLowerCase())
        )
    );
};

const searchTextTask = document.querySelector('#searchTaskText');

/**
 * Éxecute la fonction searchTask à chaque lettre entrée dans la barre de recherche.
 */
searchTextTask.addEventListener('input', (event) => {
    searchTask(event.target);
});
