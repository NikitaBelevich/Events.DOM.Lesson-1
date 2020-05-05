'use strict';

// TODO Task 1
const div1 = document.querySelector('.task1');
const button1 = document.querySelector('.task1 button');
button1.addEventListener('click', function() {this.style.display = 'none';});
// TODO Task 1


// TODO Task 2
const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.addEventListener('click', moveBall);

function moveBall(event) {
    const coordsField = getCoordinatesElement(this); // получим координаты поля относительно окна

    let clientWidthField = this.clientWidth;
    let clientHeightField = this.clientHeight;
    let clientWidthBall = ball.clientWidth;
    let clientHeightBall = ball.clientHeight;

    const leftBorderField = this.clientLeft;
    const topBorderField = this.clientTop;

    const moveBallX = event.clientX - (clientWidthBall / 2) - (coordsField.left + leftBorderField);
    const moveBallY = (event.clientY - coordsField.top) - (clientHeightBall / 2) - topBorderField;

    //? анимируем кручение мячика
    ball.style.animation = '';
    setTimeout(() => {ball.style.animation = 'rotate-ball .75s';});
    //? анимируем кручение мячика

    //* Left (ограничение левой границы)
    if (moveBallX < 0) {
        ball.style.left = 0;
    } else {
        ball.style.left = `${moveBallX}px`;
    }
    //* Right (ограничение правой границы)
    const innerRightSideField = clientWidthField - clientWidthBall;
    if (moveBallX > innerRightSideField) {
        ball.style.left = `${innerRightSideField}px`;
    }
    //* Top (ограничение верхней границы)
    if (moveBallY < 0) {
        ball.style.top = 0;
    } else {
        ball.style.top = `${moveBallY}px`;
    }
    //* Bottom (ограничение нижней границы)
    const innerBottomLine = moveBallY + clientHeightBall;
    if (innerBottomLine > clientHeightField) {
        ball.style.top = `${clientHeightField - clientHeightBall}px`;
    }
}

function getCoordinatesElement(elem) {
    return elem.getBoundingClientRect();
};
// TODO Task 2

// TODO Task 3
const menu3 = document.querySelector('.task3 .menu');
const menuTitle = menu3.firstElementChild;
const menuList = menu3.lastElementChild;
const iconTitle = menuTitle.firstElementChild;

menuTitle.addEventListener('click', function() {
    menuList.style.opacity = 0;
    iconTitle.classList.toggle('icon-circle-right_rotation');
    menuList.classList.toggle('menu__list-show');
    setTimeout(() => {menuList.style.opacity = 1;}); // после выполнения основного кода
});
// TODO Task 3

// TODO Task 4
const messages = document.querySelectorAll('.task4 .messages__message');
messages.forEach((message) => {
    const buttonClose = message.lastElementChild;
    buttonClose.addEventListener('click', () => {
        message.classList.add('messages__message-hide'); // анимация скрытия
        setTimeout(() => {message.hidden = true;}, 280); // скрытие из потока
    });
});
// TODO Task 4

// TODO Task 5
const leftArrow = document.querySelector('.slider > .slider__left-button');
const rightArrow = document.querySelector('.slider > .slider__right-button');
const carouselList = document.querySelector('.slider .slider__spread');
const imgSlides = carouselList.children;
const widthSlide = 130;
const countSlide = 3;
let positionSlider = 0;

leftArrow.addEventListener('click', () => {
    positionSlider += widthSlide * countSlide;
    positionSlider = Math.min(positionSlider, 0)
    carouselList.style.transform = `translateX(${positionSlider}px)`;
});

rightArrow.addEventListener('click', () => {
    positionSlider -= widthSlide * countSlide;
    positionSlider = Math.max(positionSlider, -widthSlide * (imgSlides.length - countSlide));
    carouselList.style.transform = `translateX(${positionSlider}px)`;
});
// TODO Task 5

// TODO Task 6
let div6 = document.querySelector('.task6');
div6.addEventListener('mousemove', (e) => {
    div6.textContent = `X: ${e.offsetX + div6.clientLeft}  Y: ${e.offsetY + div6.clientTop}`;
});
// TODO Task 6

// TODO Task 7
let div7 = document.querySelector('.task7');
div7.addEventListener('click', (event) => {
    let square = div7.firstElementChild;
    square.style.cssText = `left: ${event.offsetX}px; top: ${event.offsetY}px`;
});
// TODO Task 7

// TODO Task 8
let div8 = document.querySelector('.task8');
div8.addEventListener('click', (event) => {
    let square = div8.firstElementChild;
    const squareWidth = square.offsetWidth;
    const squareHeight = square.offsetHeight;
    // console.log(event);
    square.style.cssText = `left: ${event.offsetX - (squareWidth / 2)}px; top: ${event.offsetY - (squareHeight / 2)}px`;
});
// TODO Task 8

// TODO Task 9
const inp9 = document.querySelector('.task9 input');
const outKeyCode = document.querySelector('.task9 span:first-of-type');
const outKey = document.querySelector('.task9 span:last-of-type');
inp9.addEventListener('keyup', (event) => {
    const keyCode = event.keyCode;
    const key = event.key;
    outKeyCode.textContent = `Код нажатой клавиши: ${keyCode}`;
    outKey.textContent = `Клавиша: ${key}`;
});

// TODO Task 9

// TODO Task 10
const button10 = document.querySelector('.task10 button');
button10.addEventListener('click', (event) => {

    if (event.ctrlKey) {
        button10.style.backgroundColor = 'red';
    }
    
    console.log(event);
});

// TODO Task 10

// TODO Task 11
const button11 = document.querySelector('.task11 button');
button11.addEventListener('click', function(event) {
    if (event.ctrlKey) {
        this.textContent = 1;
    }
    if (event.altKey) {
        this.textContent = 2;
    }
    if (event.shiftKey) {
        this.textContent = 3;
    }
});
// TODO Task 11
