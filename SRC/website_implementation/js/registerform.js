
//this information is not retained in any way shape or form, i think this would require constructing and endpoint for this data through the use of an API
//I hope we arent meant to know how to set up an API i have no clue :( this is only to show how this would function

    const registrationConfirm = document.getElementById('registration-confirm');
    const registrationButt = document.getElementById('registrationbut');    
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const email = document.getElementById('email');
    const pwd = document.getElementById('pwd');
    const cpwd = document.getElementById('cpwd');
    const regform = document.getElementById('login-form');



    function confirmReg() {       

         
        registrationConfirm.textContent = 'Registration succesffuly submitted, please check your email to confirm.';      
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('pwd').value = '';
        document.getElementById('cpwd').value = '';
        
    };

    registerButt.addEventListener("click", confirmReg);
