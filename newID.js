/**
 * Créer un ID pour une task.
 */
const newID = (item) => {
    const elements = JSON.parse(localStorage.getItem(item));
    if (elements === null || elements.length < 1) {
        return 1;
    }
    return elements.sort((x, y) => { x.id > y.id }).slice(-1)[0].id + 1;
}
