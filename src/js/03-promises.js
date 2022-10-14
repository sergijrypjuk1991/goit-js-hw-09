import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  let delayPromise = Number(delayInput.value);

  for (let i = 1; i <= amountInput.value; i += 1) {
    createPromise(i, delayPromise).then(onSuccess).catch(onError);
    delayPromise += Number(stepInput.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSuccess(value) {
  Notiflix.Notify.success(value);
}

function onError(error) {
  Notiflix.Notify.failure(error);
}
