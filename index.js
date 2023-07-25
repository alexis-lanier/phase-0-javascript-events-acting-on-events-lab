// Your code here

//arrow left
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`; 
    }
       
}

//arrow right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left >= 0 && left < 361) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
