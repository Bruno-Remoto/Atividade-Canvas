const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "gray");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 250, 210);

var grd = ctx2.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "yellow");
ctx2.fillStyle = grd;
ctx2.fillRect(0, 0, 250, 210);

ctx.beginPath()
ctx.arc(95, 50, 40, 0, 2 * Math.PI)
ctx.stroke()

ctx2.beginPath()
ctx2.moveTo(200, 250)
ctx2.bezierCurveTo(120, 160, 180, 10, 220, 140)
ctx2.stroke()

ctx.beginPath()
ctx.moveTo(20, 110)
ctx.quadraticCurveTo(230, 130, 200, 300)
ctx.stroke()

ctx.isPointInStroke(x, y)
ctx.isPointInStroke(path, x, y)
const circle = new Path2D()
circle.arc(150, 75, 50, 0, 2 * Math.PI)
ctx.fillStyle = 'red'
ctx.fill(circle)
canvas.addEventListener('click', function(event){
    if(ctx.isPointInPath(circle, event.offsetX , event.offsetY)){
        ctx.fillStyle = 'green';
    }
    else{
        ctx.fillStyle = 'red';
    }
    ctx.ClearRect(0, 0, canvas.width, canvas.height);
    ctx.fill(circle);
})

ctx.font = '30px Arial'
ctx.fillStyle = 'black'
ctx.fillText('Hello World', 10, 50)

ctx2.font = "50px Times New Roman"
ctx2.strokeStyle = "#00F5FD"
ctx2.strokeText("É isso",539 , 80)

var imagem = new Image();
imagem.src = 'Mordekaiser.jpg'
ctx.drawImage(imagem, 0, 0)