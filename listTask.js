/**
 * Retourne la liste de tasks liée au user connecté.
 */
const sessionListTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const session = JSON.parse(localStorage.getItem('session')) || null;
    if (session === null) {
        window.location.reload();
        return false;
    }
    return tasks.filter((task) => task.owner === session.email);
}
