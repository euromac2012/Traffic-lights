window.addEventListener('load', function lights(){
    'use strict';
    var redLight = document.querySelector('.red');
    var greenLight = document.querySelector('.green');
    var yellowLight = document.querySelector('.yellow');
    var time = 22;
    var counter = time;
    var yellowLightTime = 3;

    function changeLights(){
        var timer = setInterval(function(){
            if (counter === 3 && redLight.classList.contains('active')) {
                changeClass(yellowLight, 'redText', 'active');
            }
            if (counter === 0) {
                if (redLight.classList.contains('active') && yellowLight.classList.contains('active')) {
                    counter = time;
                    redLight.classList.remove('active');
                    changeClass(yellowLight, 'active', 'greenText');
                    greenLight.classList.add('active');
                } else if (greenLight.classList.contains('active')) {
                    counter = yellowLightTime;
                    greenLight.classList.remove('active');
                    changeClass(yellowLight, 'greenText', 'active');
                } else  if (yellowLight.classList.contains('active') && !redLight.classList.contains('active')) {
                    changeClass(yellowLight, 'active', 'redText');
                    redLight.classList.add('active');
                    counter = time;
                }
            }
            yellowLight.textContent = counter;
            counter--;
        }, 1000);
    }
    function changeClass(element, removeClass, addClass) {
        element.classList.remove(removeClass);
        element.classList.add(addClass);
    }
    changeLights();
});



