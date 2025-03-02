const formEmail = formSection.querySelector('#formEmail');
const formPass = formSection.querySelector('#formPass');
const formMessage = formSection.querySelector('#formMessage');

formSelect.selectedIndex = 0;
/**
 * Connecte ou inscrit selon la valeur du select.
 */
formButton.addEventListener('click', (event) => {
    event.preventDefault()
    const formEmail = document.querySelector("#formEmail")
    const formPass = document.querySelector("#formPass")

    if (!(formEmail.value && formPass.value)) {
        formMessage.innerHTML = "Veuillez remplir les champs.";
    } else {
        if (formSelect.value === 'connexion') {
            const user = checkEmail(formEmail.value);
            if (!user)
            {
                formMessage.innerHTML = "Cet email n'est pas enregistré, si vous voulez vous inscrire, sélectionner 'inscription' dans le sélector en haut de la page.";
            } else if (!(user.pass === formPass.value)) {
                formMessage.innerHTML = "Ce mot de passe ne correspond pas à l'email.";
            } else {
                const expirationSession = new Date();
                expirationSession.setHours(expirationSession.getHours()+1);
                const session = {
                    email: user.email,
                    expirationDate: expirationSession,
                }
                localStorage.setItem('session', JSON.stringify(session));
                if(isConnected()){
                    afficheProfile();
                }
            }
        } else {
            if (!checkEmail(formEmail.value)) {
                const user =
                {
                    id: newID('users'),
                    email: formEmail.value,
                    pass: formPass.value,
                }
                const users = JSON.parse(localStorage.getItem('users'));
                if (users === null) {
                    localStorage.setItem('users', JSON.stringify([user]));
                    formMessage.innerHTML = `Vous vous êtes inscrit avec l'email : ${formEmail.value}`;
                    formFields.reset();
                } else {
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(users));
                    formMessage.innerHTML = `Vous vous êtes inscrit avec l'email : ${formEmail.value}`;
                    formFields.reset();
                }
            } else {
                formMessage.innerHTML = "Vous êtes déjà inscrit, si vous voulez vous connectez cliquez sur le bouton connexion.";
            }
        }
    }
})
