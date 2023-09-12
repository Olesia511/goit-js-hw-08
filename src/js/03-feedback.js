// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

const email = form.children[0].children[0];
const textarea = form.children[1].children[0];

const userInfo = {
  email: '',
  message: '',
};

const parseLocal =
  JSON.parse(localStorage.getItem('feedback-form-state')) || '';
console.log(`parseLocal`, parseLocal);

email.value = parseLocal.userInfo.email || '';
textarea.value = parseLocal.userInfo.message || '';
console.log('emailParse', email.value);
console.log('messageParse', textarea.value);

function onInput(e) {
  const { target } = e;

  if (target.name === 'email') {
    userInfo.email = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
  }

  if (target.name === 'message') {
    userInfo.message = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
  }

  userInfo.email = email.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));

  userInfo.message = textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')).userInfo);

  localStorage.removeItem('feedback-form-state');
  email.value = '';
  textarea.value = '';
}
