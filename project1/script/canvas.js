$(()=>{
  const canvas = document.querySelector("#canvas");
  canvas.width = window.innerWidth-75;
  canvas.height = window.innerHeight-100;
  const c = canvas.getContext("2d");
  //Variables
  let startH=6;
  let moveH=531;
  let moveV=527;
  let gridy=2;
  let energy=10;
//Drawn items
c.beginPath();
  for(let i=0; i<25; i++){
    let gridx = 6;
    for(let i=0; i<36; i++){
      c.fillStyle="rgba(255,0,0,0.2)";
      c.fillRect(gridx, gridy, 33, 33);
        gridx+=35;
    }//close for loop 2
    gridy+=35;
  }//close for loop1
c.closePath();
//Clear a sqare from the grid and draw the chappel square
c.beginPath();
c.clearRect(532, 108, 66, 66);
c.fillStyle='yellow';
const drawchappelRoom = c.fillRect(532, 108, 67, 67);
c.closePath();
//add the chappel text
c.beginPath();
c.font="20px Helvetica";
c.fillStyle='black';
c.fillText("Chapel", 533, 130);
c.closePath();
//draw the character image on the grid
c.beginPath();
const image1 = new Image();
image1.src="images/male_rogue.jpg";
c.drawImage(image1, moveH, moveV, 33, 33);
c.closePath();
//Draw the monster on the grid
const image2 = new Image();
image2.src="images/minotaur.jpg";
c.beginPath();
c.clearRect(1021,527,33,33);
c.drawImage(image2, 1021, 527, 33, 33);
c.closePath();
//These functions are called on button clicks to move the character around the grid
const moveLeft=()=>{
  checkCollisionLeft();
  if(moveH>0){
    c.beginPath();
    c.clearRect(moveH,moveV, 33, 33);
    c.drawImage(image1, moveH-35, moveV, 33, 33);
    c.fillStyle="rgba(255,0,0,0.2)";
    c.fillRect(moveH, moveV, 33, 33);
    moveH-=35;
    c.closePath();
  console.log(moveH);
  }else{
    alert("You can't move that direction any further");
  }
  energy-=1;
}//close moveLeft
const moveRight=()=>{
  checkCollisionRight();
  checkMinotaur();
  if(moveH<1225){
    c.beginPath();
    c.clearRect(moveH, moveV, 33, 33);
    c.drawImage(image1, moveH+35, moveV, 33, 33);
    c.fillStyle="rgba(255,0,0,0.2)";
    c.fillRect(moveH, moveV, 33, 33);
    moveH+=35;
    c.closePath();
    // console.log(moveH);
  }else{
    alert("You can't move that direction any further");
  }
  energy-=1;
}//close moveRight
const moveDown=()=>{
  checkCollisionDown();
  if(moveV<875){
    c.beginPath();
    c.clearRect(moveH, moveV, 33, 33);
    c.drawImage(image1, moveH, moveV+35, 33, 33);
    c.fillStyle="rgba(255,0,0,0.2)";
    c.fillRect(moveH, moveV, 33, 33);
    moveV+=35;
    c.closePath();
    console.log(moveV);
  }else{
    alert("You can't move that direction any further");
  }
  energy-=1;
}//close moveDown
const moveUp=()=>{
  checkCollisionUp();
    checkChapel();
  if(moveV>0){
    c.beginPath();
    c.clearRect(moveH, moveV, 33, 33);
    c.drawImage(image1, moveH, moveV-35, 33, 33);
    c.fillStyle="rgba(255,0,0,0.2)";
    c.fillRect(moveH, moveV, 33, 33);
    moveV-=35;
    c.closePath();
    console.log(moveV, "This is vertical move");
  }else{
    alert("You can't move that direction any further");
  }
  energy-=1;
}
$('#move-right').on("click", moveRight);
$('#move-left').on("click", moveLeft);
$('#move-down').on("click", moveDown);
$('#move-up').on("click", moveUp);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
};
//Left wall north
c.beginPath();
c.moveTo(530, 525);
c.lineTo(530, 108);
c.strokeStyle="black";
c.stroke();
//Right wall north
c.beginPath();
c.moveTo(565, 525);
c.lineTo(565, 176);
c.strokeStyle="black";
c.stroke();
c.closePath();
//Top wall East
c.beginPath();
c.moveTo(565, 525);
c.lineTo(1020, 525);
c.strokeStyle="black";
c.stroke();
c.closePath();
//Top Wall West
c.beginPath();
c.moveTo(531, 525);
c.lineTo(6, 525);
c.strokeStyle="black";
c.stroke();
c.closePath();
//Bottom Wall
c.beginPath();
c.moveTo(6, 561);
c.lineTo(1020, 561);
c.strokeStyle="black";
c.stroke();
c.closePath();
const checkChapel=()=>{
  if(moveV < 212){
    alert("Entering the chapel is working");
    moveV=212;
  }else{}
}
const checkMinotaur=()=>{
  if(moveH > 951){
    alert("You encountered a monster");
    moveH=951;
  }else{}
}
const checkCollisionLeft=()=>{
  if(moveH<565&&moveV<527){
    alert("Stop trying to run into the wall!");
    moveH=566;
  }else{}
};
const checkCollisionRight=()=>{
  if(moveH>530&&moveV<527){
    alert("Stop trying to run into the wall!");
    moveH=496;
  }else{}
};
const checkCollisionUp=()=>{
  checkChapel();
  if(moveH>565||moveH<530&&moveV<562){
    alert("Stop trying to run into the wall!");
    moveV=562;
  }else{}
};
const checkCollisionDown=()=>{
  if(moveV>495){
    alert("Stop trying to run into the wall!");
    moveV=492;
  }else{}
};
  //Arc or circle
  // c.beginPath();
  // c.arc(300, 300, 30, 0, Math.PI*2, false);
  // c.strokeStyle='blue';
  // c.stroke();

  // for(let i=0; i<3; i++){
  //   const x = Math.floor(Math.random()*window.innerWidth);
  //   const y = Math.floor(Math.random()*window.innerHeight);
  //   c.beginPath();
  //   c.arc(x, y, 30, 0, Math.PI*2, false);
  //   c.strokeStyle='blue';
  //   c.stroke();
  // }
  // let x = 200;
  // let y = 200;
  // let dy=4;
  // let dx=4;
  // let radius=30;
  // const animate=()=>{
  //   requestAnimationFrame(animate);
  //   c.clearRect(0,0,canvas.width,canvas.height);
  //   c.beginPath();
  //   c.arc(x, y, radius, 0, Math.PI*2, false);
  //   c.strokeStyle='blue';
  //   c.stroke();
  //   if(x + radius >canvas.width || x - radius < 0){
  //     dx=-dx;
  //   }
  //   if(y + radius >canvas.height || y - radius < 0){
  //     dy=-dy;
  //   }
  //   x+=dx;
  //   y+=dy;
  // }
  // animate();
});
