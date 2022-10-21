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
  if (dataRef.email && dataRef.message) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    dataRef.email = ``;
    dataRef.message = ``;
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    return alert('Пожалуйста заполните все поля!');
  }
}

function returnSavedCurrentData() {
  const savedCurrentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedCurrentData) {
    formRef[0].value = savedCurrentData.email ? savedCurrentData.email : '';
    formRef[1].value = savedCurrentData.message ? savedCurrentData.message : '';
    dataRef.email = savedCurrentData.email;
    dataRef.message = savedCurrentData.message;
  }
}
