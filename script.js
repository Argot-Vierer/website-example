const div = document.querySelector("div1");
let offsetX, offsetY;

const move = (e) => {
    div.style.left = `${e.clientX - offsetX}px`;
    div.style.top = `${e.clientY - offsetY}`;
}
div.addEventListener("mousedown", (e) => {
offsetX = e.clientX - div.offsetLeft;
offsetY = e.clientY - div.offsetTop;
document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);});

