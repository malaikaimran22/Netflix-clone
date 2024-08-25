document.getElementById("netflix-btn").addEventListener("click",()=>{
window.location.href = "indexs.html"
})

document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector("#email-input input");
    const emailValue = emailInput.value.trim();

    emailInput.style.border = "1px solid #403F3D";

    if (!emailValue) {
        return; 
    }

    if (!validateEmail(emailValue)) {
        showError(emailInput, "Enter a valid email address");
    } else {
        alert("Email is valid!");
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    input.style.border = "2px solid red";

    let errorMessage = input.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains("error-message")) {
        errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        input.parentNode.appendChild(errorMessage);
    }

    errorMessage.textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    scrollLeftBtn.addEventListener('click', () => {
        movieList.scrollBy({
            left: -movieList.clientWidth / 3, 
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        movieList.scrollBy({
            left: movieList.clientWidth / 3, 
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
  
    const dropdowns = document.querySelectorAll('.dropdown1, .dropdown2, .dropdown3, .dropdown4, .dropdown5, .dropdown6');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
           
            const activeDropdown = document.querySelector('.dropdown1.active, .dropdown2.active, .dropdown3.active, .dropdown4.active, .dropdown5.active, .dropdown6.active');
            
            if (activeDropdown && activeDropdown !== dropdown) {
                // Hide the currently active dropdown's content and update images
                const activeContent = activeDropdown.nextElementSibling;
                const activePlusImg = activeDropdown.querySelector('img');
                const activeCrossImg = activeDropdown.nextElementSibling.querySelector('#hideimg');
                
                if (activeContent) {
                    activeContent.style.display = 'none';
                }
                if (activePlusImg) {
                    activePlusImg.style.display = 'block';
                }
                if (activeCrossImg) {
                    activeCrossImg.style.display = 'none';
                }

                activeDropdown.classList.remove('active');
            }

            
            const content = dropdown.nextElementSibling;
            const plusImg = dropdown.querySelector('#dropdown1img img');
            const crossImg = content.querySelector('#hideimg');

            if (content) {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    if (plusImg) {
                        plusImg.style.display = 'block';
                    }
                    if (crossImg) {
                        crossImg.style.display = 'block';
                    }
                } else {
                    content.style.display = 'block';
                    if (plusImg) {
                        plusImg.style.display = 'block';
                    }
                    if (crossImg) {
                        crossImg.style.display = 'none';
                    }
                }
            }

            dropdown.classList.toggle('active');
    });
});
});