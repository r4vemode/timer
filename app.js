const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timerInterval;


function formatTime(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;


  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}


const createTimerAnimator = () => {
  let totalSeconds;

  return (seconds) => {

    if (timerInterval) clearInterval(timerInterval);

    totalSeconds = seconds;
    timerEl.textContent = formatTime(totalSeconds);

    timerInterval = setInterval(() => {
      if (totalSeconds === 0) {
        clearInterval(timerInterval);
      } else {
        totalSeconds--;
        timerEl.textContent = formatTime(totalSeconds);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {

  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value) * 60;

  animateTimer(seconds);

  inputEl.value = '';
});
