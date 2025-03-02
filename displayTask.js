/**
 * Affiche les tasks liées au user connecté.
 */
const displayTask = (tasks) => {
    const ulElement = document.querySelector('#listTask');
    ulElement.textContent = "";
    tasks.forEach((task) => {
        const newLi = document.createElement("li");
        newLi.classList.add("TaskContainer")
        newLi.appendChild(createPropertyTask(task))
        newLi.appendChild(checkBoxTask(task.id));
        newLi.appendChild(buttonDeleteTask());
        ulElement.appendChild(newLi);
    })
    checkTask();
    deleteTask(tasks);
}
