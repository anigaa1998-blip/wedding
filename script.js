function openInvite(){

document.querySelector(".welcome").style.display="none";
document.getElementById("main").style.display="block";

}

const params = new URLSearchParams(window.location.search);
const name = params.get("to");

if(name){

document.getElementById("guest").innerHTML="Dear "+name+", You are invited!";

}


var wedding = new Date("May 18, 2026 10:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = wedding - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("countdown").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Minutes ";

}, 1000);
