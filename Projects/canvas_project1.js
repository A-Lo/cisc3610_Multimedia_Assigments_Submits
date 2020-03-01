console.log("Hola");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "rgb(255, 83, 47)";
ctx.fillRect(100, 100, 100, 100);

//Triangle
 ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
    // ctx.strokeStyle = "rgb(255, 83, 47)";
    // ctx.stroke();
	// ctx.closePath();	   

//Grass
ctx.beginPath();
	ctx.moveTo(0, 500);
	ctx.lineTo(0,575);
	 ctx.lineTo(innerWidth, 575);
	ctx.lineTo(innerWidth, 500);
	ctx.fillStyle= "rgb(27, 186, 69)";
	ctx.fill();

//Sun
ctx.beginPath();
	ctx.arc(500, 100, 50, 0, Math.PI*2, true);
	ctx.strokeStyle = "#F75214 ";
	ctx.stroke();
	ctx.fillStyle = "#F3E012";
	ctx.fill();
ctx.closePath();	
	
//House
ctx.beginPath();
	ctx.moveTo(500, 500);
	ctx.lineTo(500,300);
	ctx.lineTo( 700,300);
	ctx.lineTo(700, 500);
	ctx.fillStyle = "#AB6610 ";
	ctx.fill();

//Door
ctx.beginPath();
	ctx.moveTo(600, 500);
	ctx.lineTo(600, 450);	
	ctx.lineTo(650,450);
	ctx.lineTo(650, 500);
	ctx.strokeStyle = "#211403  ";
	ctx.stroke();
// DoorKnob	
ctx.beginPath();
		ctx.arc(610, 480, 5, 0, Math.PI*2, true);
		ctx.strokeStyle = "#FAFAFA";
		ctx.stroke();
		ctx.fillStyle = "black ";
		ctx.fill();
ctx.closePath();

//Windows
var windowX = 550;
var windowY = 375;
for(var i = 0; i < 2; i ++){
	ctx.beginPath();
		ctx.arc(windowX, windowY, 15, 0, Math.PI*2, true);
		ctx.strokeStyle = "#01CAF6 ";
		ctx.stroke();
		ctx.fillStyle = "#F3E012 ";
		ctx.fill();
	ctx.closePath();
	windowX += 100;
}

// Chimney
ctx.beginPath();
	ctx.moveTo(650, 300);
	ctx.lineTo(650, 275);
	ctx.lineTo(675, 275);
	ctx.lineTo(675, 300);
	ctx.fillStyle = "#EA4108"; 
	ctx.fill();

//Grass Strands
ctx.beginPath();
for (var i = 2; i < 500; i+=5) {

	ctx.moveTo(i, 500);
	ctx.lineTo(i, 480);
	ctx.strokeStyle = "rgb(27, 186, 69)";
	ctx.stroke();
	ctx.closePath();
}
ctx.closePath();

//Fence
//x= 725 y = 500
//z= 740
// ctx.beginPath();
// 	ctx.moveTo(725, 500);
// 	ctx.lineTo(725, 470);
// 	ctx.lineTo(740, 450);
// 	ctx.lineTo(755, 470);
// 	ctx.lineTo(755, 500);
// 	ctx.stroke();

//Fence 
var x = 725; 
var y = 500;
var z = 740;
for(var i = 0; i < 7; i++){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y - 30);
	ctx.lineTo(z, y - 50);
	ctx.lineTo(x + 30, y - 30);
	ctx.lineTo(x + 30, y);
	ctx.strokeStyle = "black";
	ctx.stroke();

	 ctx.fillStyle = "#E8C793 ";
	 ctx.fill();

	
	ctx.closePath();
	x+=30;
	z+=30;
}

//Hello World
ctx.font = "30px Arial";
ctx.fillStyle = "black ";
ctx.fillText("Hello World", 200, 50);








