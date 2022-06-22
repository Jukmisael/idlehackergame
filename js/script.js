var points = 0;
var perclick = 1;

function addpoints(){
    points += perclick;
    document.getElementById(showpoints).innerHTML = points;
}