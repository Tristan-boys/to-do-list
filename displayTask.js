const displayTask = (tasks) => {
    const ulElement = document.querySelector('#listTask');
    ulElement.textContent = "";
    tasks.forEach((task) => {
        const newLi = document.createElement("li");
        newLi.classList.add("TaskContainer")
        Object.entries(task).forEach(([key, value]) => {
            newLi.appendChild(createPropertyTask(key, value));
        })
        newLi.appendChild(checkBoxTask(task.id));
        newLi.appendChild(buttonDeleteTask());
        ulElement.appendChild(newLi);
    })
    checkTask();
    deleteTask(tasks);
}
