/**
 * Gère l'affichage et l'enregistrement dans le localstorage du bouton check.
 */
const checkTask = () => {
    const listTask = document.querySelector('#listTask');
    const checkboxs = listTask.querySelectorAll('.check');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < checkboxs.length; i++) {
        if (tasks.find(task => task.id.toString() === checkboxs[i].value).checked === "true") {
            if (!(listTask.children[i].classList.contains('checked'))) {
                listTask.children[i].classList.add('checked');
                listTask.children[i].children[2].classList.add('hide');
                checkboxs[i].setAttribute('checked', 'true');
            }
        } else {
            if (listTask.children[i].classList.contains('checked')) {
                if (listTask.children[i].children[2].classList.contains('hide')) {
                    listTask.children[i].children[2].classList.remove('hide');
                }
                listTask.children[i].classList.remove('checked');
            }
        }
        checkboxs[i].addEventListener('change', () => {
            if (isConnected()) {
                isTaskChecked(listTask.children[i], tasks, checkboxs[i].value);
            } else {
                window.location.reload();
            }
        })
    }
}
