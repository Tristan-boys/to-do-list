const buttonCreateTask = taskManagerSection.querySelector('#buttonCreateTask');
const buttonCloseDialog = taskManagerSection.querySelector('#closeDialog');
const dialogCreateTask = taskManagerSection.querySelector('#createTask');
const formCreateTask = taskManagerSection.querySelector('form');
const createTaskTitle = formCreateTask.querySelector('#createTaskTitle');
const createTaskDescription = formCreateTask.querySelector('#createTaskDescription');
const createTaskMessage = formCreateTask.querySelector('#createTaskMessage');

buttonCreateTask.addEventListener('click', () => {
    if(!(isConnected()))
        window.location.reload();
    dialogCreateTask.showModal();
    createTaskTitle.value = "";
    createTaskDescription.value = "";
})

buttonCloseDialog.addEventListener('click', () => {
    dialogCreateTask.close();
})

formCreateTask.addEventListener('blur', () => {
    console.log(createTaskTitle.value);
})

formCreateTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const session = JSON.parse(localStorage.getItem('session'));
    if (!checkTaskTitle(createTaskTitle.value)) {
        const task =
        {
            id: newID('tasks'),
            title: createTaskTitle.value,
            description: createTaskDescription.value,
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