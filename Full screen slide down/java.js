function show() {
    document.getElementById("content").style.height = "100vh"
    document.getElementById("content").style.width = "100vw"
}

function close() {
    document.getElementById("content").style.height = "0%"
    document.getElementById("content").style.width = "0%"
}

document.getElementById("close").addEventListener("click", close);

