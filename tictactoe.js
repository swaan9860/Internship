//restart game button
var restart = document.querySelector("#btn");


//grabs all squares
var squares = document.querySelectorAll('td');


//clear all squares
function clear() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = " " ;
  }
}

restart.addEventListener("click",clear);

//check square marker (repetitive solution)
// var cellOne = document.querySelector("#one")
// cellOne.addEventListener('click', function(){
//   if (cellOne.textContent === '') {
//     cellOne.textContent = 'X';
//   }else if (cellOne.textContent === 'X') {
//     cellOne.textContent = 'O';
//   }else {
//     cellOne.textContent = ' ';
//   }{
//
//   }
// })


// check square marker (cleaner solution)
function changeMarker() {
  if (this.textContent === ' ') {
this.textContent = 'X';
}else if (this.textContent === 'X') {
  this.textContent = 'O';
}else {
this.textContent = ' ';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",changeMarker)
}






//for loop to add event listeners to all squares
