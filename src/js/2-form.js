const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', submit);
form.addEventListener('input', saveValue);

returnValue();

function submit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const message = event.currentTarget.elements.message;

  if (!email.value || !message.value) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveValue(event) {
  event.preventDefault();
  const { name, value } = event.target;
  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function returnValue() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    const parsedMessage = JSON.parse(saveMessage);

    formData.email = parsedMessage.email ?? '';
    formData.message = parsedMessage.message ?? '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message.trim();
  }
}
