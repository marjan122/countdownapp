hours = 0;
min = 0;
sec = 0;

var displayMin = document.getElementById("displaycount")




var interval;



function startTimer(){

    var userTime = prompt('Enter Your Time In Seconds');

  interval = setInterval( function(){
    userTime --;
      if(userTime >= 0){
        id = document.getElementById("displaycount");
        id.innerHTML = userTime;
if (userTime <= 0) {
    alert("your time is finished")
}
    }
    },1000);
}    
function pauseTimer(){
    clearInterval(interval);
}
function resetTimer(){
    pauseTimer()
    hours = 0;
    min = 0;
    sec = 0;

    displayMin.innerHTML = min;

}

