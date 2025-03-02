const checkTaskTitle = (title) => {
    const tasks = sessionListTask();
    if (tasks === null) {
        return false;
    }
    return tasks.find(task => task.title === title);
}
