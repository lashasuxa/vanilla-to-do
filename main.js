let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p"); // created empty paragraph
  paragraph.classList.add("paragraph-styling"); // add class to created paragraph
  paragraph.innerText = inputField.value; // added value to new paragraph
  toDoContainer.appendChild(paragraph); // added paragraph to parent div
  inputField.value = ""; //empty input field
  paragraph.addEventListener("click", function () {
    //on click line through the paragraph text
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    //on double click remove text
    toDoContainer.removeChild(paragraph);
  });
});
