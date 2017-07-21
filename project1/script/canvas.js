$(()=>{
  const canvas = document.querySelector("#canvas");
  canvas.width = window.innerWidth-75;
  canvas.height = window.innerHeight-100;
  const c = canvas.getContext("2d");
  let startH=6;
  let moveH=0;
  let moveV=0;
  let gridy=2;
  for(let i=0; i<25; i++){
    let gridx = 6;
    for(let i=0; i<36; i++){
      c.fillStyle="rgba(255,0,0,0.2)";
      c.fillRect(gridx, gridy, 33, 33);
        gridx+=35;
    }
    gridy+=35;
  }
  const image1 = new Image();
  image1.src="images/male_rogue.jpg";
  c.drawImage(image1, 6, 2, 33, 33);
  const moveLeft=()=>{
    if(moveH>0){
      c.clearRect(6+moveH,2+moveV, 33, 33);
      c.drawImage(image1, moveH-29, 2+moveV, 33, 33);
      c.fillRect(moveH+6, 2+moveV, 33, 33);
      c.fillStyle="rgba(255,0,0,0.2)";
      moveH-=35;
      console.log(moveH);
    }else{
      alert("You can't move that direction any further");
    }
  }
  const moveRight=()=>{
    if(moveH<1225){
      c.clearRect(6+moveH,2+moveV, 33, 33);
      c.drawImage(image1, 41+moveH, 2+moveV, 33, 33);
      c.fillRect(6+moveH, 2+moveV, 33, 33);
      c.fillStyle="rgba(255,0,0,0.2)";
      moveH+=35;
      console.log(moveH);
    }else{
      alert("You can't move that direction any further");
    }
  }
  const moveDown=()=>{
    if(moveV<875){
      c.clearRect(6+moveH,2+moveV, 33, 33);
      c.drawImage(image1, 6+moveH, moveV+37, 33, 33);
      c.fillRect(6+moveH, 2+moveV, 33, 33);
      c.fillStyle="rgba(255,0,0,0.2)";
      moveV+=35;
      console.log(moveV);
    }else{
      alert("You can't move that direction any further");
    }
  }
  const moveUp=()=>{
    if(moveV>0){
      c.clearRect(6+moveH,2+moveV, 33, 33);
      c.drawImage(image1, 6+moveH, moveV-33, 33, 33);
      c.fillRect(6+moveH, 2+moveV, 33, 33);
      c.fillStyle="rgba(255,0,0,0.2)";
      moveV-=35;
      console.log(moveV);
    }else{
      alert("You can't move that direction any further");
    }
  }
  $('#move-right').on("click", moveRight);
  $('#move-left').on("click", moveLeft);
  $('#move-down').on("click", moveDown);
  $('#move-up').on("click", moveUp);
  // moveRogue();
  // c.renderAll();
  //line
  // c.beginPath();
  // c.moveTo(50, 300);
  // c.lineTo(300, 100);
  // c.lineTo(400, 300);
  // c.strokeStyle="#fa34a3";
  // c.stroke();

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
