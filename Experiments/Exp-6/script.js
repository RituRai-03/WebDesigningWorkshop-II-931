let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

document.getElementById("changeTextbtn").onclick = function() {
    heading.innerText = input.value;
};

input.onchange = function() {
    console.log("Input change:", input.value);
};

document.getElementById("bgColorbtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementsByID("fontSizebtn").addEventListener("click", function() {
    para.style.fontSize = "40px";
});

