const taskManagerSection = document.querySelector('#taskManagerSection');
const connectedProfile = taskManagerSection.querySelector('#connectedProfile');
const expiration = taskManagerSection.querySelector('#expiration');
const logoutButton = taskManagerSection.querySelector('#logoutButton');

const afficheProfile = () => {
    formSection.classList.add('hide');
    taskManagerSection.classList.remove('hide');
    formMessage.innerHTML = "";
    const expirationSession = new Date(JSON.parse(localStorage.getItem('session')).expirationDate);
    connectedProfile.innerHTML = JSON.parse(localStorage.getItem('session')).email;
    expiration.innerHTML = `${expirationSession.getHours()}h${expirationSession.getMinutes()}m${expirationSession.getSeconds()}s`;
    formFields.classList.add('hide');
    formFields.reset();
    formSelect.selectedIndex = 0;
    displayTask(sessionListTask());
}

const isConnected = () => {
    const session = JSON.parse(localStorage.getItem('session')) || null;
    if (session !== null) {
        const sessionExpire = new Date(session.expirationDate);
        if (sessionExpire > Date.now()) {
            return true;
        } else {
            localStorage.removeItem('session');
            return false;
        }
    }
}

if (isConnected()) {
    afficheProfile();
}

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('session');
    formSection.classList.remove('hide');
    taskManagerSection.classList.add('hide');
    taskManagerSection.querySelector('#listTask').innerHTML = "";
})
