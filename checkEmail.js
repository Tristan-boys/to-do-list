const checkEmail = (email) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        return false;
    }
    return users.find(user => user.email === email);
}
