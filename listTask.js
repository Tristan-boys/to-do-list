const sessionListTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const session = JSON.parse(localStorage.getItem('session'));
    return tasks.filter((task) => task.owner === session.email);
}