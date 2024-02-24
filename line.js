const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

for (let i = 0; i < 20; i++) {
    let XStart = Math.random() * window.innerWidth;
    let YStart = Math.random() * window.innerHeight;
    
    let XEnd = Math.random() * window.innerWidth;
    let YEnd = Math.random() * window.innerHeight;

    canvasContext.beginPath();
    canvasContext.moveTo(XStart, YStart);
    canvasContext.lineTo(XEnd, YEnd);
    canvasContext.strokeStyle = "white";
    canvasContext.stroke();
}
