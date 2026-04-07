const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if(guest){
document.getElementById("guest").innerHTML =
"Dear " + guest + ", You are invited to our wedding";
}
