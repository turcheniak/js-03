// (function(){
// let counter = 0;
// function hello() {
//     counter++;
//     return counter;
// }

// let hi = hello();
// console.log(hi);

// let hi2 = hello();
// console.log(hi2);
// })();


// 'use strict';
// function counter() {
//     let cntr = 0;
//     return function() {
//         return ++cntr;
//     }
// }

// let cFun = counter();
// console.log(cFun());
// console.log(cFun());
// console.log(cFun());


setTimeout(printMessage, 5000);
function printMessage() {
    console.log('Hello World!');
}

setInterval(function(){
    console.log((new Date()).toLocaleTimeString());
}, 1000);



