/*Make variables for buttons and Hours, Minutes, Seconds */ 


var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hours = document.getElementById("HoursInput");
var minutes = document.getElementById("MinutesInput");
var seconds = document.getElementById("SecondsInput");

//Set timer to nothing // store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //Starting the Timer and setting it to milliseconds calling the interval function every second
    
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    //Stopping the timer when hitting reset button
    stopInterval()
})

/*Making everything set to zero when clicking reset*/

//If values are 0 then set everything to 0 
function timer(){
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
        //Setting the values to 0
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        //Making it stop at 0 and not going negative
    } else if(seconds.value != 0){
        --seconds.value;
        //If minutes are  a number that is not 0 and seconds is 0 make seconds start at 59 seconds "--" minutes go down by 1
    } else if(minutes.value != 0 && seconds.value == 0){
        seconds.value = 59;
        --minutes.value;
         //If hours are  a number that is not 0 and minutes is 0 make minutes start at 60 minutes "--" hours go down by 1
    } else if(hours.value != 0 && minutes.value == 0){
        minutes.value = 60;
        --hours.value;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}