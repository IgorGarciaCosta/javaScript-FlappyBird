
context = c.getContext("2d");
const bird = new Image()
bird.src = "./Img/bird.png"
birdX = 0;
interval = 24;
birdSize = 24
birdY = 200;
birdDY = 0;//deltaY é a velocidade vertical dele
canvasSize = 400;
pipeX = 400;
pipeWidth = 24;
pipeGapBottomY = 24;
pipeGap = 200;
topPipeBottomY = 200;
score = 0;
bestScore = 9;

c.onclick = () => (birdDY = 9)//faz ele subir ao clicar
setInterval(() => {
    context.fillStyle = 'skyblue';//pinta o canvas todo desta cor
    context.fillRect(0, 0, canvasSize, canvasSize);
    birdY -= birdDY -= 0.5;//0.5 é a gravidade, basicamente
    context.drawImage(bird, birdX, birdY, birdSize * (524 / 374), birdSize);//desenha o pássaro

    context.fillStyle = 'green';
    pipeX -= 8;//move o cano
    if (pipeX < -pipeWidth) {//se o cano está fora da tela
        pipeX = canvasSize;
        topPipeBottomY = pipeGap * Math.random();

        pipeGap = Math.floor(Math.random() * (200 - 70 + 1) + 70);
    }
    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);//desenha o cano de cima (x, y, width, height)
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);//desenha o cano de baixo
    context.fillStyle = 'black';
    context.fillText(score++, 9, 25);//(text, x, y, maxwidth)
    bestScore = bestScore < score ? score : bestScore;
    context.fillText(`Melhor Pontuação: ${bestScore}`, 9, 50);
    (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) //passaro acertou o cano/
        && pipeX < birdSize * (524 / 374)) || birdY > canvasSize) &&//passaro caiu da tela
        ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), score = 0);//pássaro morreu

}, interval)
