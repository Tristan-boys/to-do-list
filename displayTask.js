const displayTask = (tasks) => {
    const ulElement = document.querySelector('#listTask');
    ulElement.textContent = "";
    tasks.forEach((task) => {
        const newLi = document.createElement("li");
        newLi.classList.add("TaskContainer")
        const propertyText = document.createElement("p");
        propertyText.innerHTML = `Titre : ${task.title} <br>
            Description : ${task.description} <br>
            Deadline : ${task.deadline} ${task.status} <br>`;
        newLi.appendChild(propertyText)
        newLi.appendChild(checkBoxTask(task.id));
        newLi.appendChild(buttonDeleteTask());
        ulElement.appendChild(newLi);
    })
    checkTask();
    deleteTask(tasks);
}
