context=c.getContext("2d");
const bird = new Image()
bird.src= "./Img/bird.png"
birdX = 0;
interval = 24;
birdSize = 24
birdY = 200;
birdDY = 0;//deltaY é a velocidade vertical dele
canvasSize = 400;
c.onclick=()=>(birdDY = 9)//faz ele subir ao clicar
setInterval(()=>{
    context.fillStyle = 'skyblue';//pinta o canvas todo desta cor
    context.fillRect(0, 0, canvasSize, canvasSize);
    birdY -= birdDY -=0.5;//0.5 é a gravidade, basicamente
    context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize)
}, interval)
