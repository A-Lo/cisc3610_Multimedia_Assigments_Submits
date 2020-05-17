console.log("Hola crayola");

var fruits = [
 		{ name:"Apple", quantity: 20, color: "red" },
 		{ name:"Orange", quantity: 10, color:"Orange" },
		{ name:"Banana", quantity: 15, color:"Yellow" },
		{name: "Kiwi", quantity: 3, color:"Green"},
 		{ name:"Blueberry", quantity: 5, color:"Blue"},
 		{name:"Grapes",quantity: 8, color:"Purple"}

 ];
 	// console.log(fruits[2].name);


function retrieveColor(x){
	var color = fruits[x].color;
	return color;
}
function retrieveName(x){
	var fruitName = fruits[x].name;
	return fruitName;
}
function retrieveQuantity(x){
	var quantity = fruits[x].quantity;
	return quantity;
}

var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(fruits.length);


//Bar Graph loop
var start_x = 50; //Starting position for the x-coordinate
var start_y = 400; //Starting position for the x-coodinate

for(var i = 0; i < fruits.length; i++){
	c.beginPath();
	c.moveTo(start_x , start_y); //variable values don't change
	c.lineTo(start_x, start_y -(retrieveQuantity(i)*10)); //Decrease y by quanity * 10
	c.lineTo(start_x+100, start_y-(retrieveQuantity(i)*10)); //Increase x by 100
	c.lineTo(start_x +100, start_y); //Increase y by 200

	c.font = "20px Arial";

	//c.fillRect(start_x, start_y, 100, retrieveQuantity(i)*10);	
	//This switch-statement is not necessary
	// switch(i) {
	// 	case 0:
	// 		c.fillStyle = retrieveColor(i);
	// 		break;
	// 	case 1:	
	// 		c.fillStyle = retrieveColor(i);
	// 		break;
	// 	case 2:
	// 		c.fillStyle = retrieveColor(i);
	// 		break;
	// 	case 3:
	// 		c.fillStyle = retrieveColor(i);
	// 		break;
	// 	case 4: 
	// 		c.fillStyle = retrieveColor(i);
	// 		break;
	// 	case 5:
	// 		c.fillstyle = retrieveColor(i);
	// 		break;	
	// 	default:
	// 		break;	
	// }
	c.fillStyle = retrieveColor(i);
			// c.strokeStyle = "black";
			// c.lineWidth =10;
			// c.strokeText(retrieveName(i),start_x, start_y+ 20);
			// c.fillstyle = "retrieveColor(i)";
	c.fillText(retrieveName(i)+ "=" +retrieveQuantity(i), start_x, start_y+ 20); 
	c.stroke();
	c.fill(); 

	c.closePath();
	start_x += 175; //To move the x-axis to draw the next Bar 
}

// c.beginPath();
// 	c.moveTo(50, 600);
// 	c.lineTo(50, 400);
// 	c.lineTo(100, 400);
// 	c.lineTo(100, 600);
// 	c.fillStyle = "#EA4108"; 
// c.fill();

c.beginPath();
	c.moveTo(50, 900);
	c.lineTo(50, 600);
	c.lineTo(100, 600);
	c.lineTo(100, 900);
	c.fillStyle = "#EA4108";
c.fill();

c.font = "50px Arial";
c.fillStyle = "black"
c.fillText("Fruit Bar-Graph", 300, 50); 
//Messing around stuff
// console.log(fruits[0].color);
// var colorMe = JSON.stringify(fruits[0].color);
// console.log(colorMe);
// c.fillStyle = "colorMe";
// c.fillRect(500, 50, 100, 100);







