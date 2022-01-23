/* define some global variables */
const bubbleDiv = document.createElement("div");//外部容器(a container for textbox and triangle)
const bubble = document.createElement("div");//对话气泡框(a text box with a small triangle)
const tri = document.createElement("div");//气泡框尖角(small triangle append to the text box)
const canvas = document.createElement("canvas");
const body = document.querySelector('body');
const width = canvas.width = 200;
const height = canvas.height = 200;
const ctx = canvas.getContext('2d');
body.appendChild(canvas);
body.appendChild(bubbleDiv);
bubbleDiv.appendChild(bubble);
bubbleDiv.appendChild(tri);

/* set css style */
/* or you can add an extra css file which manipulate .hclive */
canvas.setAttribute('class','hclive');
canvas.addEventListener('click',drawBoop)
canvas.style.position = 'fixed';
canvas.style.bottom = '0px';
canvas.style.right = '0px';
bubbleDiv.setAttribute('class','container-hc');
bubble.setAttribute('class','textbox-hc');
tri.setAttribute('class','triangle-hc');
bubble.textContent = '你好，游客';

//contex initialization
ctx.fillStyle = 'rgba(255,255,255,0)';
ctx.fillRect(0,0,width,height);

//load image
let imageSitBlink = new Image();
imageSitBlink.src = 'images/hc-sit-blink2.png';
imageSitBlink.onload = drawBlink;
let imageSitBoop = new Image();
imageSitBoop.src = 'images/hc-boop-sit.png';

let cnt = 0;//to get different frames in cycle
let velocity = 3;//to control how fast the animation plays
let framesPerCycle = 120;//to indirectly control the proporion of main act(eg.blink)
let framenum = 6;
let imgWidth = 156;
let imgHeight = 168;

function drawBlink() {
  let ind;
  if (cnt % 3 === 0) {
      let cnt2 = cnt/3;
    if (cnt2 < framenum) {
      ind = cnt2;
    } else {
      ind = 0;
    }
    ctx.drawImage(
      imageSitBlink,
      imgWidth * ind,
      0,
      imgWidth,
      imgHeight,
      width-imgWidth+6,//canvas x-bias
      40,//canvas y-bias
      imgWidth,
      imgHeight
    );
  }
  if (cnt === framesPerCycle) {
      cnt = 0;
  } else {
    cnt++;
  }
  raf1 = window.requestAnimationFrame(drawBlink);
}
function initImage1(){
cnt = 0;//to get different frames in cycle
velocity = 3;//to control how fast the animation plays
framesPerCycle = 120;//to indirectly control the proporion of main act(eg.blink)
framenum = 6;
imgWidth = 156;
imgHeight = 168;
}
function initImage2(){
  cnt = 0;//to get different frames in cycle
  velocity = 3;//to control how fast the animation plays
  framesPerCycle = 120;
  framenum = 17;
  imgWidth = 159;
  imgHeight = 174;
}
function drawBoopOnce(){
  let ind;
  if (cnt % 3 === 0) {
      let cnt2 = cnt/3;
    if (cnt2 < framenum) {
      ind = cnt2;
    } else {
      ind = 0;
    }
    ctx.clearRect(0,0,width,height);
    ctx.drawImage(
      imageSitBoop,
      imgWidth * ind,
      0,
      imgWidth,
      imgHeight,
      width-imgWidth+6,//canvas x-bias
      34,//canvas y-bias(for alignment, this should be img1.ybias-img1.width+this.width)
      imgWidth,
      imgHeight
    );
  }
  if (cnt === framesPerCycle) {
    initImage1();
    bubbleDiv.style.opacity = 0;
    raf1 = window.requestAnimationFrame(drawBlink);
  } else {
    cnt++;
    raf1 = window.requestAnimationFrame(drawBoopOnce);
  }
}
function drawBoop(){
    window.cancelAnimationFrame(raf1);
    bubbleDiv.style.opacity = 0.9;
    initImage2();
    drawBoopOnce();
}
