(function() {
  'use strict';
  // YOUR CODE HERE
  const controls = document.getElementById("controls")
const stopButton = document.getElementById("stopButton")
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton");
const Buttons = document.getElementsByClassName("button");

const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

let click = function(event) {
  if(event.target.id==="stopButton"){
    stopLight.className==='bulb'?stopLight.className="stop bulb":stopLight.className=`bulb`;
    stopLight.className==='bulb'?console.log("Stoplight bulb on"):console.log("Stoplight bulb off");
  }
  if(event.target.id==="slowButton"){
    slowLight.className==='bulb'?slowLight.className="slow bulb":slowLight.className=`bulb`;
    slowLight.className==='bulb'?console.log("Slowlight bulb on"):console.log("Slowlight bulb off");
  }
  if(event.target.id==="goButton"){
    goLight.className==='bulb'?goLight.className="go bulb":goLight.className=`bulb`;
    goLight.className==='bulb'?console.log("Golight bulb on"):console.log("Golight bulb off");
  }
};
let enterStop = function() {
  console.log("Entered Stop Button");
}
let enterSlow = function() {
  console.log("Entered Slow Button");
}
let enterGo = function() {
  console.log("Entered Go Button");
}
let leaveStop = function() {
  console.log("Left Stop Button");
}
let leaveSlow = function() {
  console.log("Left Slow Button");
}
let leaveGo = function() {
  console.log("Left Go Button");
}

window.addEventListener("click",click);
stopButton.addEventListener("mouseenter",enterStop);
slowButton.addEventListener("mouseenter",enterSlow);
goButton.addEventListener("mouseenter",enterGo);
stopButton.addEventListener("mouseleave",leaveStop);
slowButton.addEventListener("mouseleave",leaveSlow);
goButton.addEventListener("mouseleave",leaveGo);
})();
