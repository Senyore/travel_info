      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 40;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#c886d8';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';

      context.stroke();
context.font = "30px Arial";
context.fillStyle = "white";
context.textAlign = "center";
context.fillText("СД", canvas.width/2, canvas.height/2+15);