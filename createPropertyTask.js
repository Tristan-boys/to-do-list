/**
 * Retourne un HTMLParagraphElement (<p>) qui contient le text d'une task.
 * @param task {id: number, title: string, description: string, deadline: Date, status: string, owner: string, checked: string}
 */
const createPropertyTask = (task) => {
    const propertyText = document.createElement("article");
    propertyText.classList.add('card');
    const {title, description, deadline, status} = task;
    propertyText.innerHTML = `<h1>Titre : ${title}</h1>
        <ul><li>Description : ${description}</li>
        <li>Deadline : ${deadline} ${status} </li></ul>`;
    return propertyText;
}

/**
 * Retourne un HTMLInputElement (<input>) qui est la checkbox à cocher pour confirmer que la task a été réalisée.
 * @param id number
 */
const checkBoxTask = (id) => {
    const propertyCheckBox = document.createElement("input");
    propertyCheckBox.setAttribute('type', 'checkbox');
    propertyCheckBox.setAttribute('value', id.toString());
    propertyCheckBox.classList.add("check");
    return propertyCheckBox;
}

/**
 * Retourne un HTMLButtonElement (<button>) qui est le bouton pour supprimer une task.
 */
const buttonDeleteTask = () => {
    const propertyButton = document.createElement("button");
    propertyButton.classList.add("delete");
    propertyButton.classList.add("button");
    propertyButton.textContent = `SUPPRIMER`;
    return propertyButton;
}
