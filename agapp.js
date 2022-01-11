
var h = 0;
var mi = 0;
var sc = 0;

var displayHBTN = document.getElementById("hbtn")
var displayMBTN = document.getElementById("mbtn")
var displaySBTN = document.getElementById("sbtn")

var Interval;

function sTimer(){
    Interval = setInterval(function (){
        sc++;
        if (sc == 60) {
            mi = 0;
            mi++;
            if (mi == 60) {
                h++;
                mi=0;
            }
        }
        displayHBTN.innerHTML = h;
        displayMBTN.innerHTML = mi;
        displaySBTN.innerHTML = sc;
    }, 1000);
}
function pTimer(){
    clearInterval(Interval);
}
function rTimer(){
    pTimer()
    h = 0;
    mi = 0;
    sc = 0;

    displayHBTN.innerHTML = h;
    displayMBTN.innerHTML = mi;
    displaySBTN.innerHTML = sc;

}

