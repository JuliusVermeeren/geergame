const di = document.getElementById("dino");
const ca = document.getElementById("cactus");
const cat = document.getElementById("cactus2");
const tree = document.getElementById("tree");
let count = 0;

function myFunction(event) {
var x = event.keyCode;
if (x == 38) {
if (di.classList != "animate") {
di.classList.add("animate");

setTimeout (function(){
di.classList.remove("animate");
}, 700)
}
}
if (x == 40) {
if (di.classList != "animate2") {
di.classList.add("animate2");

setTimeout (function(){
di.classList.remove("animate2");
}, 800)
}
}
}

function start() {
document.getElementById("startDiv").innerHTML="";
document.getElementById("div").style.opacity="0%";

var caR = setInterval (function() {
var caM = Math.floor(Math.random() * 3) + 1;
var caD = document.getElementByClassName("start").style.animationDuration = caM + "s";
}, 10);

ca.classList.add("start");
cat.classList.add("startt");
tree.classList.add("treeAnimation");

var deadCheck = setInterval (function(){
var diTop = parseInt(getComputedStyle(di).getPropertyValue("top"));
var caLeft = parseInt(getComputedStyle(ca).getPropertyValue("left"));
var catLeft = parseInt(getComputedStyle(cat).getPropertyValue("left"));
var diHeight = parseInt(getComputedStyle(di).getPropertyValue("height"));

if (caLeft < 100 && caLeft > 0 && diTop > 449) {
alert("U lose, refresh to try again, score: " + Math.floor(count/150));
count=0;
}
if (catLeft < 100 && catLeft > 0 && diTop != 450)  {
alert("U lose, refresh to try again, score: " + Math.floor(count/150));
count=0;
}
else {
count++
document.getElementById("demo").innerHTML="score: " + Math.floor(count/150);
}
if (Math.floor(count/150) = 100) {
alert("CONGRATS! U won, your score was 100! Refresh to restart");
count=0
}
},10);
}