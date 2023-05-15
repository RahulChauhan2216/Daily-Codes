let x = document.getElementById("bar1")
let y = document.getElementById("bar2")
let z = document.getElementById("bar3")
let count = 0;
function change() {
    if (count == 0) {
        x.style.transform = "translate(0px,10px)rotate(-45deg)";
        y.style.opacity = "0%";
        z.style.transform = "translate(0px,-10px)rotate(45deg)";
        count = 1;
    }
    else if (count == 1) {
        x.style.transform = "translate(0px,0px)rotate(0deg)";
        y.style.opacity = "100%";
        z.style.transform = "translate(0px,0px)rotate(0deg)";
        count = 0;
    }

}