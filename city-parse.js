// xpath ссылка на элемент, содержащий название города
let nameObjects = $("tr > td:nth-of-type(3)");

// массив с названиями городов
let nameArr = Array();
let nameLongText = "";

// получаем список городов массивом и строкой
$.each(nameObjects, function(i, obj) {
    let nameText = obj.innerText;
    console.log("Город: " + nameText + "; \n");
    nameArr.push(nameText);
    nameLongText += nameText + "\n";
});

let nameFile = new Blob([nameLongText], {type: 'text/plain'});

let a = document.createElement("a"),
    url = URL.createObjectURL(nameFile);
a.href = url;
a.download = 'КИРИЛЛ СОСИ ХУЙ';
document.body.appendChild(a);
a.click();
setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}, 0);

// function download(text, name, type) {
//     var a = document.getElementById("a");
//
//     a.href = URL.createObjectURL(file);
//     a.download = name;
// }