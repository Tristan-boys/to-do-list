const deleteTask = (sessionTasks) => {
    const listTask = document.querySelector('#listTask');
    const deleteButtons = listTask.querySelectorAll('.delete');
    for(let i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', () => {
            if(isConnected()){
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                const taskID = sessionTasks[i].id;
                const newTasks = tasks.filter((task) => task.id !== taskID);
                localStorage.setItem('tasks', JSON.stringify(newTasks));
                displayTask(sessionListTask());
            } else {
                window.location.reload();
            }
        })
    }
}
