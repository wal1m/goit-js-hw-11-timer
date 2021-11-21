const timerRef = document.querySelector("#timer-1");
const daysRef = timerRef.querySelector('[data-value="days"]');
const hoursRef = timerRef.querySelector('[data-value="hours"]');
const minsRef = timerRef.querySelector('[data-value="mins"]');
const secsRef = timerRef.querySelector('[data-value="secs"]');

const dateSet = new Date(2022, 0, 1); //1 января 2022 => Unix 1631480400000
setInterval(() => {
  const currentTimer = Date.now();
  const deltaTime = dateSet - currentTimer;
  if (deltaTime >= 0) {
    updateClock(deltaTime);
  }
}, 1000);

// 13 сентября 2021
// const date = new Date(2021, 8, 13, 0, 0, 0, 0);
// console.log(`2021, 9, 13, 0, 0 соответствует ${date.getTime()}`);
// 2021, 9, 13, 0, 0 соответствует 1631480400000
// const date = new Date(1631480400000);
// console.log(date);

function updateClock(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  //   console.log(`${days}:${hours}:${mins}:${secs}`);
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
