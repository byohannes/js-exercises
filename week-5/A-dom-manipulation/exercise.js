/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var bgrChangeBtn = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "yellow";
});
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", click);
function click() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

document.querySelector("#addTextBtn").addEventListener("click", add);
function add() {
  var paragraph = document.createElement("P");
  var myElement = document.querySelector(".buttons");
  myElement.appendChild(paragraph);
  paragraph.innerText = "ReadMore Below.";
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", function() {
  document.body.style.fontSize = "10px";
});
