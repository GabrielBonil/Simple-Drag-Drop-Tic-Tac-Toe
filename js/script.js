let reset = document.querySelector(".reset");
var boardDropBoxes = document.querySelectorAll(".board .dropBox");

function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

reset.addEventListener('click', () => {
    location.reload();
});