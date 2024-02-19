/** @type {HTMLCanvasElement} */  
// -> add intellisense for ctx functions

let canvas = document.querySelector('#canvas1');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Root{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;  // Math.random() * (max - min) + min  --> between -2 & 2
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 5;
        this.size = Math.random() * 1 + 2;
        this.velocitySize = Math.random() * 0.2 + 0.05;
        this.angleX = Math.random() * 6.2; // 6.2 radians -> 360°
        this.velocityAngleX  = Math.random() * 0.6  - 0.3;
        this.angleY = Math.random() * 6.2; 
        this.velocityAngleY  = Math.random() * 0.6  - 0.3;
        this.lightness = 10;
    }
    update(){
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.velocitySize;
        this.angleX += this.velocityAngleX ;
        this.angleY += this.velocityAngleY ;
        if (this.lightness < 70) this.lightness += 0.4; // increase the lightness for a "3D" render (from 10% dark to 70% light)
        if(this.size < this.maxSize){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "hsl(140,100%," + this.lightness + "%)";
            ctx.fill();
            ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }

    }
}
window.addEventListener("mousemove", (e) =>{
    for (let i=0 ; i < 2; i++){
        let root = new Root(e.x, e.y);
        root.update();
    }
 
} );