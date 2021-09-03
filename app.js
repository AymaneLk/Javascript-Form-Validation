/* TARGET ID & CLASSES */
const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const username = id('username');
const email = id('email');
const password = id('password');

const errorMsg = Array.from(classes('error'));
const successIcon = Array.from(classes('success-icon'));
const failureIcon = Array.from(classes('failure-icon'));

const form = id('form');

/* ADD EVENT LISTENERS */
form.addEventListener('submit', (event) => {
    event.preventDefault();

    /* TARGETING USERNAME VALUE */
    engine(username, 0, "Username Cannot be blank.")
    /* TARGETING EMAIL VALUE */
    engine(email, 1, "Email Cannot be blank.")
    /* TARGETING PASSWORD VALUE */
    engine(password, 2, "Password Cannot be blank.")
})

function engine(id, serial, message) {
    if(id.value.trim() === ""){
        errorMsg[serial].textContent =  message;
        successIcon[serial].style.opacity = '0';
        failureIcon[serial].style.opacity = '1';
    }
    else {
        errorMsg[serial].textContent = '';
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}