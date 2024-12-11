    import { timersList } from './timer';

    // Функция для создания таймера
    const createTimer = function (time) {
        const timerItem = document.createElement('li');
        timerItem.innerHTML = `
          <span class="timer-value">${time}</span>
          <button class="stop-timer">Остановить</button>
          <button class="delete-timer">Удалить</button>
        `;
        timersList.appendChild(timerItem);
    
        const timerValue = timerItem.querySelector('.timer-value');
        const stopButton = timerItem.querySelector('.stop-timer');
        const deleteButton = timerItem.querySelector('.delete-timer');
        let remainingTime = time;
        let isStopped = false;
    
        const intervalId = setInterval(() => {
          if (!isStopped) {
            timerValue.textContent = --remainingTime;
    
            if (remainingTime <= 0) {
              clearInterval(intervalId);
              timerItem.remove();
            }
          }
        }, 1000);
    
        // Остановка таймера
        stopButton.addEventListener('click', function () {
          isStopped = !isStopped;
          stopButton.textContent = isStopped ? 'Продолжить' : 'Остановить';
        });
    
        // Удаление таймера
        deleteButton.addEventListener('click', function () {
          clearInterval(intervalId);
          timerItem.remove();
        });
      };

export default createTimer;