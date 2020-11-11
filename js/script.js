
const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');

function clock() {
    // new Date() - берет время с компьютера
    // getSeconds() - это метод берет секунды с компьютера
    // getMinutes() - это метод берет секунды с компьютера
    // getHours() - это метод берет секунды с компьютера
    let time = new Date(),
        second = time.getSeconds() * 6;
    minutes = time.getMinutes() * 6;
    hours = time.getHours() * 30;

    sec.style = `transform:rotate(${second}deg);`;
    min.style = `transform:rotate(${minutes}deg);`;
    hour.style = `transform:rotate(${hours}deg);`;

    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();


    setTimeout(function () {
        clock();
    }, 1000)

}
clock();


const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function (e) {

        // e.preventDefault();

        for (let ix = 0; ix < tabs.length; ix++) {
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');

        }
        tab(this, tabs[i]);
    })
}
function tab(el, arr) {
    el.classList.add('active');
    arr.classList.add('active');
}

var start_btn = document.querySelector('.stopwatch__btn');
var reset_btn = document.querySelector('.reset__btn');
var stopwatch_h = document.querySelector('.stopwatch__hours');
var stopwatch_m = document.querySelector('.stopwatch__minutes');
var stopwatch_s = document.querySelector('.stopwatch__seconds');
var SEC = 0;
var MIN = 0;
var HOURS = 0;
function stopwatch() {
    if (!reset_btn.classList.contains('clicked')&&start_btn.innerHTML!='start'){
    stopwatch_s.innerHTML = ++SEC;
    if (stopwatch_s.innerHTML == 59) {
        SEC = 0
        stopwatch_m.innerHTML = ++MIN;
        if (stopwatch_m.innerHTML == 59) {
            stopwatch_h.innerHTML = ++HOURS;
            MIN = 0;
        }
    }
    }
    if (!reset_btn.classList.contains('clicked')&&start_btn.innerHTML!='start'){
        setTimeout(function () {
            stopwatch();
        }, 1000);
    }
}


start_btn.addEventListener('click', function () {
    if (start_btn.innerHTML == 'start') {
        start_btn.innerHTML = 'stop';
        start_btn.classList.add('clicked');
        reset_btn.classList.remove('clicked');
    }
    else {
        start_btn.innerHTML = 'start';
        start_btn.classList.remove('clicked');

    }
    if (start_btn.classList.contains('clicked')) {
        stopwatch();
    }

})

reset_btn.addEventListener('click', function () {
    start_btn.innerHTML = 'start';
    reset_btn.classList.add('clicked');
    SEC = 0;
    MIN = 0;
    HOURS = 0;
    stopwatch_s.innerHTML = 0;
    stopwatch_h.innerHTML = 0;
    stopwatch_m.innerHTML = 0;
}
)




