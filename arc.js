const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

for (let i = 0; i < 20; i++) {
    let XStart = Math.random() * window.innerWidth;
    let YStart = Math.random() * window.innerHeight;
    
    let radius = (Math.random() * window.innerWidth) / 10;
    canvasContext.beginPath();

    canvasContext.arc(XStart, YStart, radius, 0, Math.PI);
    canvasContext.strokeStyle = "green";
    canvasContext.stroke();
}
