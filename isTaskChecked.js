/**
 * Enregistre une task et gère son affichage
 */
const isTaskChecked = (li, tasks, id) => {
    if (li.classList.contains('checked')) {
        li.classList.remove('checked');
        li.children[2].classList.remove('hide');
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id.toString() === id) {
                tasks[i].checked = "false";
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        li.classList.add('checked');
        li.children[2].classList.add('hide');
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id.toString() === id) {
                tasks[i].checked = "true";
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
