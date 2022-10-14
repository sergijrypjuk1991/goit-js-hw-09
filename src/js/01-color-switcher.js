function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;
refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', event => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
});
