const newID = (item) => {
    const elements = JSON.parse(localStorage.getItem(item));
    if (elements === null) {
        return 1;
    }
    return elements.sort((x, y) => { x.id > y.id }).slice(-1)[0].id + 1;
}
