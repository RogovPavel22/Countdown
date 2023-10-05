const block = document.querySelectorAll('.number');

// Дата финиша
const countDownDate = new Date(2024, 9, 5, 21, 0, 0).getTime();

function timer() {
    
    // Текущя дата
    const nowDate = new Date().getTime();

    // Разница (сколько времении до фниша)
    const distance = countDownDate - nowDate;

    // 1c = 1000мс
    // 1м = 60с
    // 1ч = 60м
    // 1д = 24ч 

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMin);
    let seconds = Math.floor((distance % oneMin) / 1000);

    let arr = [days, hours, minutes, seconds];


    if (distance > 0) {
        block.forEach((item, index) => item.textContent = arr[index])
    } else {
        clearInterval(countDown);
        block.forEach(item => item.textContent = '00')
    };
}

let countDown = setInterval(timer, 1000);

timer();
