document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById('registerForm');
    const registrationConfirm = document.getElementById('registration-confirm');

    const confirmReg = (event) => {
        event.preventDefault();

        let firstName = document.getElementById('fname').value;
        let lastName = document.getElementById('lname').value;
        let emailAd = document.getElementById('email').value;
        let passWord = document.getElementById('pwd').value;
        let passWordCon = document.getElementById('cpwd').value;
    
    
        if (firstName && lastName && emailAd && passWord && passWordCon) {
            registrationConfirm.textContent = 'Registration succesffuly submitted, please check your email to confirm.';
        } else {
            registrationConfirm.textContent = 'Registration unsuccesffuly submitted, please try again.';
        }
    };

    registerForm.addEventListener("submit", confirmReg);
});