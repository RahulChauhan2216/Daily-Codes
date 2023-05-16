let a = document.getElementById('content1');
let b = document.getElementById('content2');
let c = document.getElementById('content3');
let d = document.getElementById('first');
let count = 0;
let count1 = 0;
let count2 = 0;

function check1() {
    if (count == 0) {
        a.style.maxHeight= "fit-content"
        count = 1
    } else if (count = 1){
        a.style.maxHeight= "0px"
        a.style.overflow= "hidden"
        count = 0
    } 
}

function check2() {
    if (count1 == 0 ) {
        b.style.maxHeight= "fit-content"
        count1 = 1
    } else if (count1 = 1){
        b.style.maxHeight= "0px"
        b.style.overflow= "hidden"
        count1 = 0
    } 
}

function check3() {
    if (count2 == 0) {
        c.style.maxHeight= "fit-content"
        count2 = 1
    } else if (count2 = 1){
        c.style.maxHeight= "0px"
        c.style.overflow= "hidden"
        count2 = 0
    } 
}