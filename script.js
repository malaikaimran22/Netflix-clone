document.getElementById('netflixbtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    
  
    const emailOrPhone = document.getElementById('mobilenbr').value;
    const password = document.getElementById('Password').value;

  
    const emailError = document.getElementById('erroremail');
    const passwordError = document.getElementById('errorpasswords');
    
   
    const emailOrPhoneField = document.getElementById('mobilenbr');
    const passwordField = document.getElementById('Password');

    let isValid = true;

   
    const emailOrPhonePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{10,15}$/; 
    if (!emailOrPhonePattern.test(emailOrPhone)) {
        emailError.textContent = 'Please enter a valid email or phone number.';
        emailOrPhoneField.style.border = '1px solid red'; 
        isValid = false;
    } else {
        emailError.textContent = '';
        emailOrPhoneField.style.border = '';
    }

    
    if (password.length < 4 || password.length > 60) {
        passwordError.textContent = 'Your password must contain between 4 and 60 characters.';
        passwordField.style.border = '1px solid red'; 
        passwordError.textContent = 'Your password must contain between 4 and 60 characters.';
        passwordField.style.border = '1px solid red'; 
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordField.style.border = '';
    }

   
});


document.getElementById('footers').addEventListener('click', function() {
    const tickImg = document.getElementById('iconimg');
    const iconDiv = document.getElementById('icon');

    if (tickImg.style.display === 'none') {
        tickImg.style.display = 'block'; 
        iconDiv.style.backgroundColor = 'white';
    } else {
        tickImg.style.display = 'none'; 
        iconDiv.style.backgroundColor = 'transparent'; 
    }
});


document.querySelector('.portion1').addEventListener('click', function() {
    window.location.href = 'index.html';
});