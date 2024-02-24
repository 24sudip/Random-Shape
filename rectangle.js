const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

for (let i = 1; i < 21; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);

    let width = Math.random() * 200;
    let height = Math.random() * 200;

    canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    canvasContext.fillRect(x, y, width, height);    
}
