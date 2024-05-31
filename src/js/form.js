"use strict"

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit');
const success = document.querySelector('.success');
const errorInput = document.querySelector('.errorInput');
const errorMessage = document.querySelector('.errorMessage');
const close = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');

const checkForm = () => {
  
    if(message.value !== "" && input.value !== "") {
        backdrop.classList.add('is-open')
        form.reset();
        errorInput.style.display = 'none'
        errorMessage.style.display = 'none'
        success.style.display = 'none'
    }
};

close.addEventListener('click', () => {
    backdrop.classList.remove('is-open')
})

const checkEmail = () => {
    if (input.validity.valid) {
        success.style.display = 'block'
    } else {
        success.style.display = 'none'
    }
};

input.addEventListener('input', checkEmail);

form.addEventListener('submit', e => {
    e.preventDefault();

    if(input.value.trim() === "") {
        errorInput.style.display = 'block'
        errorInput.textContent = 'the field must be filled'
    } 
    if(message.value.trim() === "") {
        errorMessage.style.display = 'block'
    } 

    if(input.value.trim() !== "" && message.value.trim() !== "") {
        checkForm();
    }
});