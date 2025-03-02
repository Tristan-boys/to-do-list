/**
 * Retourne un élement du tableau users correspondant l'email passer en entrée.
 * @param email string
 */
const checkEmail = (email) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        return false;
    }
    return users.find(user => user.email === email);
}
