const paraPwdOne = document.querySelector('.paraPwdOne');
const paraFirstName = document.querySelector('.paraFirstName');
const paraLastName = document.querySelector('.paraLastName');
const paraEmail = document.querySelector('.paraEmail');
const paraPhone = document.querySelector('.paraPhone');
const myForm = document.querySelector('#myForm');

const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const firstPassword = document.querySelector('#firstPassword');
const secondPassword = document.querySelector('#secondPassword');

const btnAccount = document.querySelector('#btnAccount');

let valueForm = 0;

function checkForm() {
    valueForm = 0;
    // check first name
    paraFirstName.textContent = '';
    if (fname.value === '') {
        paraFirstName.textContent = 'Please fill in your first name';
    }
    re = /^[A-Za-z- ]+$/
    if (fname.value !== '' && !re.test(fname.value)) {
        paraFirstName.textContent = 'First name must contain only letters!';
    }
    re = /^[A-Za-z- ]+$/
    if (fname.value !== '' && re.test(fname.value)) {
        valueForm += 1;
    }
    // check last name
    paraLastName.textContent = '';
    if (lname.value === '') {
        paraLastName.textContent = 'Please fill in your last name';
    }
    re = /^[A-Za-z- ]+$/
    if (lname.value !== '' && !re.test(lname.value)) {
        paraLastName.textContent = 'First name must contain only letters!';
    }
    re = /^[A-Za-z- ]+$/
    if (lname.value !== '' && re.test(lname.value)) {
        valueForm += 1;
    }
    // check email
    paraEmail.textContent = '';
    if (email.value === '') {
        paraEmail.textContent = 'Please fill in your email!';
    }
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value !== '' && !re.test(email.value)) {
        paraEmail.textContent = 'You\'ve entered an incorrect email address!';
    }
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value !== '' && re.test(email.value)) {
        valueForm += 1;
    }
    // check phone
    paraPhone.textContent = '';
    if (phone.value === '') {
        paraPhone.textContent = 'Please fill in your phone number!';
    }
    re = /^\d{10}$/
    if (phone.value !== '' && !re.test(phone.value)) {
        paraPhone.textContent = 'Phone number must contain 10 digits';
    }
    re = /^\d{10}$/
    if (phone.value !== '' && re.test(phone.value)) {
        valueForm += 1;
    }

    // check password
    if (firstPassword.value == secondPassword.value) {
        paraPwdOne.textContent = '';
        if (firstPassword.value.length < 8) {
            paraPwdOne.textContent = 'Password must contain at least 8 characters!';
        }
        re = /[0-9]/;
        if (!re.test(firstPassword.value)) {
            paraPwdOne.textContent = 'Password must contain at least one number!';
        }
        re = /[a-z]/
        if (!re.test(firstPassword.value)) {
            paraPwdOne.textContent = 'Password must contain at least one lowercase letter!';
        }
        re = /[A-Z]/
        if (!re.test(firstPassword.value)) {
            paraPwdOne.textContent = 'Password must contain at least one uppercase letter!';
        }
        if (firstPassword.value === '') {
            paraPwdOne.textContent = 'Please fill in your password!';
        } 
        re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (re.test(firstPassword.value)) {
            valueForm += 1;
        }
    } else if (firstPassword.value !== secondPassword.value) {
        paraPwdOne.textContent = 'Password does not match';
    }

    // submit form
    if (valueForm === 5) {
        document.getElementById('myForm').submit();
    }
}