let x = document.getElementById('option');
let y = document.getElementsByClassName('menu');
let z = document.getElementById('hamburger');
let n = document.getElementById('navbar');

let count = 0;


function show() {

    if (count == 0) {
        x.style.display = "block"
        x.style.width = "100vw"
        z.style.position = "absolute"
        z.style.left = "90%"
        z.style.top = "6%"
        count = 1;
    }

    else if (count == 1) {
        x.style.display = "flex"
        z.style.position = "absolute"
        z.style.left = "90%"
        z.style.top = "25%"
        count = 0
    }

}

