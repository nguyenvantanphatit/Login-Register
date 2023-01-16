

var username = document.querySelector('#username');
var password = document.querySelector('#password');
var password2 = document.querySelector('#password2');
var email = document.querySelector('#email');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;

}
function showSucces(input) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText = "";
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'khong duoc de trong');
        } else {
            showSucces(input);
        }

    });
    return isEmptyError;
}

function checkEmail(input) {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSucces(input);
    } else {
        showError(input, 'email khong dung');
    }
    return
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `ban co it nhat ${min} ky tu`);
        return true
    }
    if (input.value.length > max) {
        showError(input, `khong duoc qua ${max} ky tu`);
        return true
    }
    showSucces(input);
    return false

}

function checkMatchPass(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'mat khau khong trung nhau');
        return true
    }
    showSucces(cfPasswordInput);
    return false
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!checkEmptyError([username, password, password2, email])) {
        checkEmail(email);
        checkLengthError(username, 3, 20);
        checkLengthError(password, 3, 20);
        checkMatchPass(password, password2);
    }

})

