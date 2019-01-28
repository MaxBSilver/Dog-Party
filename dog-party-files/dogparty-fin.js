var nameChange = document.getElementById("dogName");
var inputBox = document.getElementById("inputName");
var submitBtn = document.getElementById("subBtn");

submitBtn.addEventListener("click", changeName);

function changeName(event) {

   event.preventDefault();
   var savedName = inputBox.value;
   nameChange.innerText = savedName;

 }