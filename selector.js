const formSection = document.querySelector('#formSection');
const formSelect = formSection.querySelector('select[name=selector]');
const formButton = formSection.querySelector('#formButton');
const formTitle = formSection.querySelector('h1');
const formFields = formSection.querySelector('form');

/**
 * Permet de choisir entre s'inscrire et se connecter.
 */
formSelect.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'connexion' :
            formFields.classList.remove('hide');
            formTitle.innerText = "Connectez-vous";
            formButton.innerText = "Connexion";
            break;
        case 'inscription' :
            formFields.classList.remove('hide');
            formTitle.innerText = "Inscrivez-vous";
            formButton.innerText = "Inscription";
            break;
        default :
            formFields.classList.add('hide');
            break;
    }
});
