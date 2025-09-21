


// INDEX HTML

const canvas = document.getElementById("corazones");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Clase corazón
class Corazon {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speedY = Math.random() * 1 + 0.5;
    this.speedX = (Math.random() - 0.5) * 1;
    this.color = `hsl(${Math.random()*360}, 70%, 70%)`;
    this.angle = Math.random() * Math.PI * 2;
    this.type = Math.floor(Math.random()*3); // 3 tipos de corazón
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.sin(this.angle));
    ctx.fillStyle = this.color;

    ctx.beginPath();
    switch(this.type){
      case 0: // corazón clásico
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0, -this.size/2, -this.size/2, -this.size/2, -this.size/2, 0);
        ctx.bezierCurveTo(-this.size/2, this.size/2, 0, this.size/1.5, 0, this.size);
        ctx.bezierCurveTo(0, this.size/1.5, this.size/2, this.size/2, this.size/2, 0);
        ctx.bezierCurveTo(this.size/2, -this.size/2, 0, -this.size/2, 0, 0);
        ctx.fill();
        break;
      case 1: // corazón simple
        ctx.arc(0,0,this.size/2,0,Math.PI*2);
        ctx.fill();
        break;
      case 2: // corazón pequeño con línea
        ctx.moveTo(0,0);
        ctx.lineTo(this.size/2, this.size);
        ctx.lineTo(-this.size/2, this.size);
        ctx.closePath();
        ctx.fill();
        break;
    }

    ctx.restore();
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.angle += 0.02;

    if(this.y < -50) this.y = canvas.height + 50;
    if(this.x < -50) this.x = canvas.width + 50;
    if(this.x > canvas.width + 50) this.x = -50;
  }
}

const corazones = [];
for(let i=0;i<50;i++) corazones.push(new Corazon());

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  corazones.forEach(c=>{
    c.update();
    c.draw();
  });
  requestAnimationFrame(animate);
}

animate();