const buttonCreateTask = taskManagerSection.querySelector('#buttonCreateTask');
const buttonCloseDialog = taskManagerSection.querySelector('#closeDialog');
const dialogCreateTask = taskManagerSection.querySelector('#createTask');
const formCreateTask = taskManagerSection.querySelector('form');
const createTaskTitle = formCreateTask.querySelector('#createTaskTitle');
const createTaskDescription = formCreateTask.querySelector('#createTaskDescription');
const createTaskDeadline = formCreateTask.querySelector('#createTaskDeadline');
const createTaskMessage = formCreateTask.querySelector('#createTaskMessage');

/**
 * Événement qui ouvre la modale qui permet de créer une task.
 */
buttonCreateTask.addEventListener('click', () => {
    if (!(isConnected())) {
        window.location.reload();
    }
    dialogCreateTask.showModal();
    createTaskTitle.value = "";
    createTaskDescription.value = "";
})

/**
 * Événement qui permet de fermer la modale.
 */
buttonCloseDialog.addEventListener('click', () => {
    dialogCreateTask.close();
})

/**
 * Événement qui permet d'enregistrer la création de task dans le localstorage.
 */
formCreateTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const session = JSON.parse(localStorage.getItem('session'));
    if (!checkTaskTitle(createTaskTitle.value)) {
        const deadline = new Date(createTaskDeadline.value);
        const task =
        {
            id: newID('tasks'),
            title: createTaskTitle.value,
            description: createTaskDescription.value,
            deadline: createTaskDeadline.value,
            status: (deadline.getTime() > Date.now()) ? "OK" : "Passed",
            owner: session.email,
            checked: "false",
        }
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks === null) {
            localStorage.setItem('tasks', JSON.stringify([task]));
        } else {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        dialogCreateTask.close();
        displayTask(sessionListTask());
    } else {
        createTaskMessage.innerHTML = "Une tâche avec ce titre existe déjà.";
    }
})
