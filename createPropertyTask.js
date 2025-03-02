const createPropertyTask = (key, value) => {
    const propertyText = document.createElement("p");
    propertyText.textContent = `${key}: ${value}`;
    return propertyText;
}

const checkBoxTask = (id) => {
    const propertyCheckBox = document.createElement("input");
    propertyCheckBox.setAttribute('type', 'checkbox');
    propertyCheckBox.setAttribute('value', id.toString());
    propertyCheckBox.classList.add("check");
    return propertyCheckBox;
}

const buttonDeleteTask = () => {
    const propertyButton = document.createElement("button");
    propertyButton.classList.add("delete");
    propertyButton.textContent = `X`;
    return propertyButton;
}