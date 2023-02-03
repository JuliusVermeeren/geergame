var upbtnR = false;
var downbtnR = false;
var upbtnL = false;
var downbtnL = false;
var board = document.getElementById("container");
var ctx = board.getContext("2d");
var x = board.width / 2;
var y = board.height - 30;
var dx = 1.35;
var dy = -1.35;
var ballR = 5;
var leftscore = 0;
var rightscore = 0;

function arrowpressdown(e) {
   if (e.keyCode == 40) {
      downbtnR = true;
   }
   else if (e.keyCode == 38) {
      upbtnR = true;
   }
   if (e.keyCode == 83) {
      upbtnL = true
   }
   else if (e.keyCode == 90) {
      downbtnL = true
   }
}
function arrowpressup(e) {
   if (e.keyCode == 40) {
      downbtnR = false;
   }
   else if (e.keyCode == 38) {
      upbtnR = false;
   }
   if (e.keyCode == 83) {
      upbtnL = false
   }
   else if (e.keyCode == 90) {
      downbtnL = false
   }
}
function walldetect() {
   rightpaddledetect();
   leftpaddledetect();
   if(y - ballR <= 0 || y + ballR >= board.height) {
      dy = -dy;
   }
}
function rightpaddledetect() {
   if ((x + ballR) >= board.width - (Rpaddle_W + 8)) {
      if (y > Rpaddle_Y && y < Rpaddle_Y + Rpaddle_H) {
         dx = -dx;
      }
      else if ((x + ballR) >= board.width) {
         rightscore++;
         
         x = board.width / 2;
         y = board.height - 30;
         dx = 1.35;
         dy = -1.35;
      }
   }
}
function leftpaddledetect() {
   if((x - ballR) <= 8) {
      if (y > Lpaddle_Y && y <Lpaddle_Y + Lpaddle_H) {
         dx = -dx;
      }
      else if ((x - ballR) <= 0) {
         leftscore++;
         
         x = board.width / 2;
         y = board.height - 30;
         dx = 1.35;
         dy = -1.35;
      }
   }
}

function ball() {
   ctx.beginPath();
   ctx.rect(x, y, ballR, ballR);
   ctx.fillStyle = "white";
   ctx.fill();
   ctx.closePath();
}


//right btns active
var Rpaddle_H = 18;
var Rpaddle_W = 6;
var Rpaddle_X = board.width - (Rpaddle_W + 8);
var Rpaddle_Y = board.height / 2 - Rpaddle_H / 2 ;
function R_reactionarrow() {
   ctx.beginPath();
   ctx.rect(Rpaddle_X, Rpaddle_Y, Rpaddle_W, Rpaddle_H);
   ctx.fillStyle = "white";
   ctx.fill();
   ctx.closePath();
   if (upbtnR && Rpaddle_Y > 0) {
      Rpaddle_Y -= 1.3;
   }
   else if (downbtnR && Rpaddle_Y < board.height - Rpaddle_H) {
      Rpaddle_Y += 1.3;
   }
}


//left btns active
var Lpaddle_H = 18;
var Lpaddle_W = 6;
var Lpaddle_Y = board.height / 2 - Lpaddle_H / 2;
var Lpaddle_X = 5;
function L_reactionarrow() {
   ctx.beginPath();
   ctx.rect(Lpaddle_X, Lpaddle_Y, Lpaddle_W, Lpaddle_H);
   ctx.fillStyle = "white";
   ctx.fill();
   ctx.closePath();
   if (upbtnL && Lpaddle_Y > 0) {
      Lpaddle_Y -= 1.3;
   }
   else if (downbtnL && Lpaddle_Y < board.height - Lpaddle_H) {
      Lpaddle_Y += 1.3;
  
  
   }
}
function draw() {
   ctx.clearRect(0, 0, board.width, board.height);
   R_reactionarrow();
   L_reactionarrow();
   ball();
   walldetect();
   document.getElementById("scoreright").innerHTML = rightscore;
   document.getElementById("scoreleft").innerHTML = leftscore;
   x += dx;
   y += dy;
}


setInterval(draw, 10);
document.addEventListener("keydown", arrowpressdown, false);
document.addEventListener("keyup", arrowpressup, false);