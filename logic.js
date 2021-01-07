context=c.getContext("2d");
const bird = new Image()
bird.src= "./Img/bird.png"
birdX = 0;
interval = 24;
birdY = 200;
canvasSize = 400;
setInterval(()=>{
    context.fillStyle = 'skyblue';//pinta o canvas todo desta cor
    context.fillRect(0, 0, canvasSize, canvasSize)
}, interval)
