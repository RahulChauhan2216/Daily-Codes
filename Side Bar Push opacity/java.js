let x = document.getElementById("btn1");
let y = document.getElementById("btn2");
let z = document.getElementById("first");
let a = document.getElementById("container")

let count = 0;

function change() {
    if (count == 0) {
        z.style.display = "block"
        // a.style.background = "linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)"
        // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
        // document.body.style.opacity = "0.5";
        count = 1;
    }
}

function change1() {
    if (count == 1) {
        z.style.display = "none"
        // document.body.style.backgroundColor = "trasparent";
        // a.style.opacity = "1"
        count = 0;
    }

}