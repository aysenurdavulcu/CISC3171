function draw() {
    var canvas = document.getElementById('canvas');
    var y = 30;
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
  
      ctx.font = "20px Georgia";
  ctx.strokeText("Cartoon Project!", 2, 15);
  ctx.moveTo(270, 250);
  ctx.lineTo(270, 170);
  ctx.lineTo(200,170);
  ctx.lineTo(200,250);
      ctx.moveTo(270,170);
  ctx.lineTo(230,140);
      ctx.lineTo(200,170);
      
  ctx.moveTo(250,210);
      ctx.lineTo(250,250);
      ctx.lineTo(230,250);
      ctx.lineTo(230,210);
      ctx.lineTo(250,210);
      ctx.moveTo(220,200);
      ctx.lineTo(210,200);
      ctx.lineTo(210,180);
      ctx.lineTo(220,180);
      ctx.lineTo(220,200);
      
      ctx.moveTo(240, 200);
      ctx.lineTo(255,200);
      ctx.lineTo(255,180);
      ctx.lineTo(240,180);
      ctx.lineTo(240,200);
  ctx.stroke();
      
      ctx.beginPath();
  ctx.arc(240, 220, 4, 0, 2 * Math.PI);
  ctx.stroke();
        ctx.beginPath();
     ctx.rect(30, 200, 10, 70);
    ctx.fillStyle='brown';
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle='green';
  ctx.arc(35, 180, 20, 0, 2 * Math.PI);
  ctx.fill();
        ctx.beginPath();
     ctx.rect(80, 190, 10, 70);
    ctx.fillStyle='brown';
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle='green';
  ctx.arc(85, 190, 20, 0, 2 * Math.PI);
  ctx.fill();
      
      for( var i = 0; i<5; i++){
        ctx.strokeStyle='yellow';
        ctx.moveTo(50,50);
        ctx.lineTo(30,y);
        ctx.moveTo(60,60);
        ctx.lineTo(80,y);
        ctx.moveTo(80,80);
        ctx.lineTo(100,y);
        ctx.stroke();
        y = y+10;
      }
    }
  }
  
  