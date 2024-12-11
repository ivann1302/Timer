import './../style.css';
import createTimer from './createTimer.js';


const timersList = document.getElementById('timer-list');
const timeInput = document.getElementById('timer-input');
const addTimerButton = document.getElementById('add-timer');

 function timer() {
    // Добавление нового таймера
    addTimerButton.addEventListener('click', function () {
      const duration = parseInt(timeInput.value, 10);
  
      if (duration > 0) {
        createTimer(duration);
        timeInput.value = '';
      } else {
        alert('Введите корректное значение времени в секундах.');
      }
    });
  }
  
export { timer, timersList };