'use strict';
let time = 1*1000;
$('#productivity').fadeOut(time*4);
$('#productivity').fadeIn(time)
setInterval(() => {
    $('#productivity').fadeOut(time);
    $('#productivity').fadeIn(time)
}, time*2)