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
