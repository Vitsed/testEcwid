'use strict'

let count = 0;

function handleImg() {
    count++;
    if(count >= 5) {
        document.querySelector('img').style.visibility = 'hidden';
        document.querySelector("h1").innerHTML = "Вы собрали автомобиль!";
    }
    console.log(count);
}