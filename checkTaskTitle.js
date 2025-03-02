/**
 * Retourne une task dont le title correspond à celui passé en paramètre.
 * @param title string
 */
const checkTaskTitle = (title) => {
    const tasks = sessionListTask();
    if (tasks === null) {
        return false;
    }
    return tasks.find(task => task.title === title);
}
