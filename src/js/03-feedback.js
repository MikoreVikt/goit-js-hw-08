import throttle from 'lodash.throttle';

const formRef = document.querySelector(`form`);
const STORAGE_KEY = 'feedback-form-state';
const dataRef = {};

formRef.addEventListener(`input`, throttle(onInputEvt, 500));
formRef.addEventListener(`submit`, onSumbitEvt);

returnSavedCurrentData();

function onInputEvt(evt) {
  if (evt.target.name === `email`) {
    dataRef.email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataRef));
  }
  if (evt.target.name === `message`) {
    dataRef.message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataRef));
  }
}

function onSumbitEvt(evt) {
  evt.preventDefault();
  evt.target.email.value = ``;
  evt.target.message.value = ``;
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function returnSavedCurrentData() {
  const saveCurrentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveCurrentData) {
    formRef[0].value = saveCurrentData.email;
    formRef[1].value = saveCurrentData.message;
  }
}
