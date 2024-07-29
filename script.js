var style = [
    "background: linear-gradient(#D33106, #571402)",
    "border: 1px solid #3E0E02",
    "color: white",
    "display: block",
    "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
    "line-height: 40px",
    "font-size: 25px",
    "text-align: center",
    "text-align: center",
    "font-weight: bold",
].join(";");


const {body} = document;
let ZoomActive = false;

window.addEventListener('click', () => {
    ZoomActive = !ZoomActive;
});

window.addEventListener('mousemove', (e) => {
    const{clientX: x, clientY: y} =e;

    if(ZoomActive){
        body.style.transform = `scale(2)`
        body.style.transformOrigin = `${x}px ${y}px`
    } else{
        body.style.transform = `none`
    }
})

