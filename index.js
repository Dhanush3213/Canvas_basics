let canvas=document.getElementById('canvas');
let ctx=canvas.getContext("2d");

// ctx.beginPath();
// // ctx.moveTo(100,100);
ctx.strokeStyle="red";
ctx.lineWidth=5;
// ctx.lineTo(200,200);
// ctx.lineTo(500,100);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(600,300);
ctx.strokeStyle="green";
ctx.lineTo(800,400);

ctx.stroke();

ctx.font = "bold 20px serif";
ctx.fillText("India",100,100);
ctx.beginPath();
ctx.fillStyle="red";
// ctx.fillRect(100,150,200,300)
ctx.rect(100,250,200,300)

ctx.stroke();
ctx.moveTo(600,300);
ctx.beginPath();

ctx.arc(600,300,60,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();

let data = [200,100,400,50]
ctx.beginPath();
ctx.moveTo(100,100);
let x=200;
for(let i=0;i<data.length;i++)
{
    ctx.lineTo(x,data[i]);
    x+=100;
}
ctx.stroke();