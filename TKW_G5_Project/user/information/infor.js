let userButton = document.getElementById('user-login');

userButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "/TKW_G5_Project/user/signIn-signUp/signIn-Up.html";
});