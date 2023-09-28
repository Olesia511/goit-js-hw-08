import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.children[0].children[0];
const textareaInput = form.children[1].children[0];
const userInfo = {
  email: '',
  message: '',
};
const parseLocal = JSON.parse(localStorage.getItem('feedback-form-state'));

if (!parseLocal) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ userInfo: { email: '', message: '' } })
  );
}

if (parseLocal.userInfo.email !== '' || parseLocal.userInfo.message !== '') {
  emailInput.value = parseLocal.userInfo.email;
  textareaInput.value = parseLocal.userInfo.message;
}

const throttleFunc = throttle(e => {
  const { target } = e;

  if (target.name === 'email') {
    userInfo.email = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
  }

  if (target.name === 'message') {
    userInfo.message = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
  }

  userInfo.email = emailInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));

  userInfo.message = textareaInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ userInfo }));
}, 500);

form.addEventListener('input', throttleFunc);
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (emailInput.value.trim() === '' || textareaInput.value.trim() === '') {
    alert(`Please fill in all fields!`);
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')).userInfo);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  textareaInput.value = '';
}
