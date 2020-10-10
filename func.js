let div = document.getElementById('container');
let cols = 10;
let reset = document.getElementById('reset');
let sizeb = document.getElementById('sizeb');
let resize = document.getElementById('resize');
createGrid()
function setsizeb(){
 if (sizeb.value<100){
   div.innerHTML = "";
  cols = sizeb.value;
  createGrid();}
else {alert("please enter a valid number betwen 1 and 100")}
}
function rest(){
  const boxes = document.getElementsByClassName('boxes');
  for (i=0;i<boxes.length;i++){
    boxes[i].style.backgroundColor='#59B56B';
  }
}
function colCha(){
  this.style.backgroundColor='black';
}
function createGrid(){
for (let i = 0; i < cols; i++) {
        for (let j = 0; j < cols; j++) {
            newBox = document.createElement('div');
            newBox.classList.add('boxes');
            newBox.style.borderWidth = "0.5px";
            newBox.style.borderStyle = "solid";
            newBox.addEventListener('mouseover',colCha);
            div.appendChild(newBox);
        }
      }
div.style.gridTemplateColumns= `repeat(${cols} , auto)`;
}
reset.addEventListener('click',rest);
resize.addEventListener('click',setsizeb);
