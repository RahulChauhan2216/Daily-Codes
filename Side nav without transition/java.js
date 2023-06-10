let x = document.getElementById("btn1");
let y = document.getElementById("btn2");
let z = document.getElementById("first");

let count = 0;

function change() {
    if (count == 0) {
        z.style.transform = "translate(0%)"
        count = 1;
    }
    else if (count == 1) {
        z.style.transform = "translate(-100%)"
        count = 0;
    }

}