let x = document.getElementById("btn1");
let y = document.getElementById("btn2");
let z = document.getElementById("first");

let count = 0;

function change() {
    if (count == 0) {
        z.style.display = "block";

        count = 1;
    }
}


function change1() {
    if (count == 1) {
        z.style.display = "none"

        count = 0;
    }
}