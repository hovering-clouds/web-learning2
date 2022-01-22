/* define some global variables */
const canvas = document.createElement("canvas");
const body = document.querySelector('body');
const width = canvas.width = 200;
const height = canvas.height = 200;
const ctx = canvas.getContext('2d');
body.appendChild(canvas);

/* set css style */
/* or you can add an extra css file which manipulate .hclive */
canvas.setAttribute('class','hclive');
canvas.style.position = 'fixed';
canvas.style.bottom = '0px';
canvas.style.right = '0px';

//contex initialization
ctx.fillStyle = 'rgba(255,255,255,0)';
ctx.fillRect(0,0,width,height);

//load image
let image = new Image();
image.src = 'images/hc-sit-blink2.png';
image.onload = draw;

//draw routine
let cnt = 0;//to get different frames in cycle
let velocity = 3;//to control how fast the animation plays
let blinkFreq = 120;
const framenum = 6;
const imgWidth = 156;
const imgHeight = 168;
function draw() {
  let ind;
  if (cnt % 3 === 0) {
      let cnt2 = cnt/3;
    if (cnt2 < framenum) {
      ind = cnt2;
    } else {
      ind = 0;
    }
    ctx.drawImage(
      image,
      imgWidth * ind,
      0,
      imgWidth,
      imgHeight,
      40,//canvas x-bias
      40,//canvas y-bias
      imgWidth,
      imgHeight
    );
  }
  if (cnt === blinkFreq) {
    cnt = 0;
  } else {
    cnt++;
  }
  window.requestAnimationFrame(draw);
}
