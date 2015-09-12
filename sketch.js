//GLOBAL VARIABLES

var maxX = 1000;
var maxY = 800;

var x = 0;
var y = 250;
var side = 1;

var sleep = true;

var count = 20;

var t = 0;

var mouseXVal = 740;
var mouseYVal = 550;

var backColour = 240;

function setup() {
  createCanvas(maxX, maxY);
}

function draw() {
  t = t + 1;
  //moveCircle();
  background(backColour);

  text('( ' + mouseX, 25, 25);
  text(', ' + mouseY + ' )', 60, 25);

  //drawGear(rad, count, xc, yc, dia, dist bw in and out, speed)

  drawGear(100, 20, 200, 200, 50, 10, 1);
  drawGear(50, 30, 175, 380, 40, 20, -3);
  drawGear(20, 16, 327, 260, 10, 10, -4.5);
  drawGear(20, 16, 306, 316, 10, 10, 4.5);
  drawGear(20, 16, 342, 362, 10, 10, -4.5);
  drawGear(55, 36, 420, 300, 50, 15, 3);
  
  //draw holder1 for lever
  stroke(150);
  fill(150);
  rect(mouseXVal -15, 0, 30, 800);
  
  stroke(130);
  fill(130);
  rect(mouseXVal -10, 0, 20, 800);
  
  //draw holder2 for lever
  stroke(150);
  fill(150);
  rect(0, mouseYVal -15, 1000, 30);
  
  stroke(130);
  fill(130);
  rect(0, mouseYVal -10, 1000, 20);
  
  //lines for lever
  bottomLever(mouseXVal);
  topLever(mouseXVal);
  midLever(mouseYVal);
 
  
}

function topLever(xVal)
{
  x1 = getPoints(70, 1, 200,200,0.1).x;
  y1 = getPoints(70, 1, 200,200,0.1).y;
  
  x2 = xVal;
  l = x2 - 130;

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  y2 = sqrt(pow(l ,2)- pow((x2-x1[0]),2)) + y1[0];
  
  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0],y1[0],x2,y2);
  
  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0],y1[0],x2,y2);
  
  stroke(0);
  strokeWeight(6);
  point(x1[0],y1[0]);
  point(x2,y2);
  
}
function midLever(yVal)
{
  x1 = getPoints(40, 1, 175, 380,-0.2).x;
  y1 = getPoints(40, 1, 175, 380,-0.2).y;
  
  y2 = yVal;
  l = y2 - 340;
  
  console.log(pow(l ,2),pow((y2-y1[0]),2));

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  x2 = sqrt(pow(l ,2)- pow((y2-y1[0]),2)) + x1[0];
  
  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0],y1[0],x2,y2);
  
  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0],y1[0],x2,y2);
  
  stroke(0);
  strokeWeight(6);
  point(x1[0],y1[0]);
  point(x2,y2);
  
}


function bottomLever(xVal)
{
  x1 = getPoints(35, 1, 420,300,.3).x;
  y1 = getPoints(35, 1, 420,300,.3).y;
  
  x2 = xVal;
  l = x2 - 385;

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  y2 = - sqrt(pow(l ,2)- pow((x2-x1[0]),2)) + y1[0];
  
  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0],y1[0],x2,y2);
  
  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0],y1[0],x2,y2);
  
  stroke(0);
  strokeWeight(6);
  point(x1[0],y1[0]);
  point(x2,y2);
  
}


function getPoints(radius, count, xc, yc, speed) {
  var xarr = [];
  var yarr = [];
  var theta = t * speed;
  stroke(0);
  for (var i = 0;  i < count; i++) {
    xarr[i] = xc + (radius * sin(((2 * (22 / 7) * i + theta) / count)));
    yarr[i] = yc + (radius * cos(((2 * (22 / 7) * i + theta) / count)));
    //ellipse(xarr[i], yarr[i], 2, 2);
  }

  return {
    x: xarr,
    y: yarr
  };
}

function drawGear(rad, count, xc, yc, radin, gap, speed) {

  stroke(0);
  xin = getPoints(rad, count, xc, yc, speed).x;
  yin = getPoints(rad, count, xc, yc, speed).y;
  xout = getPoints(rad + gap, count, xc, yc, speed).x;
  yout = getPoints(rad + gap, count, xc, yc, speed).y;

  beginShape();
  for (var i = 0; i < count; i++) {
    strokeWeight(4);
    stroke(100);
    fill(120);

    /*
    if (i % 2 == 0) {
      line(xin[i], yin[i], xout[i], yout[i]);
      curve(xin[i], yin[i], xout[i], yout[i], xout[(i + 1) % count], yout[(i + 1) % count], xin[(i + 1) % count], yin[(i + 1) % count])
    } else {
      line(xin[i], yin[i], xout[i], yout[i]);
      curve(xout[i], yout[i], xin[i], yin[i], xin[(i + 1) % count], yin[(i + 1) % count], xout[(i + 1) % count], yout[(i + 1) % count])
    }
    */
    if (i % 2 == 0) {
      vertex(xin[i], yin[i]);
      vertex(xout[i], yout[i])
      vertex(xout[(i + 1)%count], yout[(i + 1)%count])
    } else {
      vertex(xout[i], yout[i]);
      vertex(xin[i], yin[i])
      vertex(xin[(i + 1)%count], yin[(i + 1)%count])
    }
  }
  endShape(CLOSE);
  fill(backColour);
  ellipse(xc, yc, radin, radin);
}


function mousePressed()
{
  if(mouseX>475)
  mouseXVal = mouseX;
  if(mouseY>450)
  mouseYVal = mouseY;
}