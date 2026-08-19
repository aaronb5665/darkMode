let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += (" modal__overlay--visible");
    emailjs
        .sendForm(
            'service_w07ey0m',
            'template_ode7gb8',
            event.target,
            'Tj8pXx0GLmmawv__l'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += (" modal__overlay--visible");
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
          alert(
            "The email service is temporarily unavailable.  Please contact me directly at aaronb.resume@gmail.com"
          );
        })
}

// this is intializing the boolean isModalOpen to false
function toggleModal() {
    // this if statement will close the form if it is open
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    // this will open the form
    isModalOpen = true;
    document.body.classList += " modal--open";
}