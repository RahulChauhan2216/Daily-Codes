function show(a, b, c, d, e, color) {
    a.style.display = 'block'
    b.style.display = 'none'
    c.style.display = 'none'
    d.style.display = 'none'

    let element = document.getElementsByClassName("btn");

    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "";
    }
    e.style.backgroundColor = color;
}