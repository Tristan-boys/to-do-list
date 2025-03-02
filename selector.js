const formSection = document.querySelector('#formSection');
const formSelect = formSection.querySelector('select[name=selector]');
const formButton = formSection.querySelector('#formButton');
const formTitle = formSection.querySelector('h1');
const formFields = formSection.querySelector('form');

formSelect.addEventListener('change', (event) => {
    if (event.target.value === 'connexion') {
        formFields.classList.remove('hide');
        formTitle.innerText = "Connectez-vous";
        formButton.innerText = "Connexion";
    } else if (event.target.value === 'inscription') {
        formFields.classList.remove('hide');
        formTitle.innerText = "Inscrivez-vous";
        formButton.innerText = "Inscription";
    } else {
        formFields.classList.add('hide');
    }
});
