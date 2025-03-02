/**
 * Retourne un HTMLParagraphElement (<p>) qui contient le text d'une task.
 * @param task {id: number, title: string, description: string, deadline: Date, status: string, owner: string, checked: string}
 */
const createPropertyTask = (task) => {
    const propertyText = document.createElement("p");
    const {title, description, deadline, status} = task;
    propertyText.innerHTML = `Titre : ${title} <br>
        Description : ${description} <br>
        Deadline : ${deadline} ${status} <br>`;
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
    propertyButton.textContent = `X`;
    return propertyButton;
}
