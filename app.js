
const fname = document.getElementById('inputFirstName')
const lname = document.getElementById('inputLastName')
const email = document.getElementById('inputEmail')
const number = document.getElementById('inputPhone')
const password = document.getElementById('inputPassword')
const cpassword = document.getElementById('inputCPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const inputs = form.querySelectorAll('input')


form.addEventListener('submit', (e) => {

    e.preventDefault()
    checkInputs();
    
    if (inputs.className == 'form-control success'){
        console.log('valid!')
        $(e).unbind('submit').submit()
    }
})

function setError(input, message){
    const formControl = input;
    const small = input.nextElementSibling
    small.className = 'small-control error'
    formControl.className = 'form-control error';
    small.innerText = message
}

function setSuccess(input){
    const formControl = input;
    const small = input.nextElementSibling
    small.className = 'small-control success'
    formControl.className = 'form-control success';
}

function checkInputs() {


    if (fname.value == '' || fname.value == null){
        setError(fname,'First name is required');
    } else{
        setSuccess(fname);
    }

    if (lname.value == '' || lname.value == null){
        setError(lname,'Last name is required');
    } else{
        setSuccess(lname);
    }

    if (email.value == '' || email.value == null){
        setError(email,'Email is required');
    } else {
        setSuccess(email);
    }

    if (number.value == null || number.value == ''){
        setError(number,'Phone number is required');
    } else{
        setSuccess(number);
    }

    if (password.value == '' || password.value == null){
        setError(password,'Password is required');
    } else {
        setSuccess(password);
    }

    if (cpassword.value != password.value || cpassword.value == '' || cpassword.value == null){
        setError(cpassword,'Passwords do not match');
    } else{
        setSuccess(cpassword)
    }

}