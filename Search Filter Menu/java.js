// let srch = () => {
//     let filter = document.getElementById('find').value.toUpperCase();
//     let ul = document.getElementById('unorder');
//     let li = ul.getElementsByTagName('li');

//     for (let i = 0; i < li.length; i++) {
//         let a = li[i].getElementsByTagName('a')[0];
//         let textValue = a.textContent || a.innerHTML;

//         if (textValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         }
//         else {
//             li[i].style.display = "none";
//         }
//     }
// }



let srch = () => {
    let filter = document.getElementById('find').value.toUpperCase();
    let ul = document.getElementById('unorder');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].innerText;
        if (a.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}






