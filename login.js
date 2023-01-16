var username = document.querySelector('#username');
var password = document.querySelector('#password');
var form = document.querySelector('form');
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;
}


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
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!checkEmptyError([username, password])) {
        checkLengthError(username, 6, 20);
        checkLengthError(password, 6, 20);
    }
}
)

