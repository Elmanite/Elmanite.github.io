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
  let totalTurns=0;
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
  console.log(energy);
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
  console.log(energy);
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
  console.log(energy);
}//close moveDown
const moveUp=()=>{
  checkCollisionUp();
    checkChapel();
    checkEnergy();
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
  console.log(energy);
}


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
const checkEnergy=()=>{
  if(energy<=0){
    alert("You have run out of energy! Please end your turn");
    endTurn();
  }else{}
}
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
const endTurn=()=>{
  energy=10;
  totalTurns++;
  if(totalTurns>=20){
    console.log("You have become lost in the dungeon as the entrance collapses on you!");
  }else{
    console.log("You rest within the halls of the dungeon and regain your energy. You now have "+ energy+" energy and have spent "+totalTurns+"/20 turns in the dungeon. You must hurry to find all the treasure you can before the entrance collapses.");
  }
}
const encounterMonster=()=>{
  console.log("You have encountered a monster and it comes at you. What do you want to do? Attack or run away?");
  if(attack){
    battle();
  }else{
    runAway();
  }
}
const runAway=()=>{
  console.log("You run from the monster but it manages to get a swing at you!");
  const fleaSwing=Math.floor(Math.random()*20)+1;
  if(fleaSwing>=rogue.ac){
    rogue.hp-=monster1.weaponDamage;
  }
}
$('#move-right').on("click", moveRight);
$('#move-left').on("click", moveLeft);
$('#move-down').on("click", moveDown);
$('#move-up').on("click", moveUp);
$('#end-turn').on("click", endTurn);
});
