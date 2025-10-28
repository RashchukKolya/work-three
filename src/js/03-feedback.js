import throttle from 'lodash.throttle';

const KEY_SRORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(KEY_SRORAGE)) || {};
const { email, message } = form.elements;
reloadPage();

function onInput() {
  dataForm = { email: email.value, message: message.value }
  localStorage.setItem(KEY_SRORAGE, JSON.stringify(dataForm));
}

function onSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(KEY_SRORAGE);
  email.value = '';
  message.value = '';
  console.log(dataForm);
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '',
    message.value = dataForm.message || ''
  }
}



