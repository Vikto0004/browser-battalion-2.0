"use strict"

const form = document.querySelector('.work-together-form');
const input = document.querySelector('.work-together-input');
const message = document.querySelector('.work-together-message');
const submit = document.querySelector('.work-together-submit');
const success = document.querySelector('.work-together-success');
const errorInput = document.querySelector('.work-together-errorInput');
const errorMessage = document.querySelector('.work-together-errorMessage');
const close = document.querySelector('.work-together-close');
const backdrop = document.querySelector('.work-together-backdrop');

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
        errorInput.style.display = 'none'
    } else {
        success.style.display = 'none'
    }
    if(input.value === "") {
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
    } else {
        errorMessage.style.display = 'none'
    }

    if(input.value.trim() !== "" && message.value.trim() !== "") {
        checkForm();
    }
});