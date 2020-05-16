var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 50 ,50)";
ctx.fillRect(100, 100, 200, 200);

var radius = 100;
var diameter = 0;
var user_color = "black";

// "rgb(34,193,195)";

//Draws the initial circle
ctx.beginPath();
ctx.arc(400, 400, radius, 0, Math.PI * 2, true); // Outer circle
ctx.stroke();
ctx.fillStyle = user_color;
ctx.fill();

//Function to draw the new circle
function clearCircle(rad, col,)
{
  //ctx.clearRect(400, 400);
  ctx.beginPath();
  ctx.arc(400, 400, rad, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = col;
  ctx.fill();

}
///////////////

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors state; public <color> = ' + colors.join(' | ') + ' ;'
// var state = ['color', 'background-color'];
// public<state> =' + state.join(' | ')+'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#myCanvas');
var bg = document.querySelector('#myCanvas');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  //colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = '<p>Say: "color [any_color]" to change the color of the circle.<\p> <p>Ex: "color pink" ==> Changes circle color to pink<\p> <br> <p>Say: "background [any_color]" to change canvas background color.<\p> Ex: "background orange" ==> changes canvas background color to orange<p><\p> <br> Say: "size [any_number]" to change the size of the circle ' + colorHTML + '.<\p> <p>Ex: "size 400" ==> Changes the diameter of circle to 400; radius 200<\p>';

// document.body.onclick = function() {
document.querySelector('#buttonMe').onclick = function(){  
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;

var str = " "; //Will be to hold the speech-string

str += transcript; //Holds the user-speech string
var res = str.split(" "); //Delimits the string with white spaces. 

console.log("here: "+res[1] + ". 1st element"); //The first word of the user-speech
console.log("here: "+res[2] + ". 2nd element"); //2nd Word of the user speech

if (res[1] === "background") {
  var color = res[2];
  console.log("color in if-statement is:" +color);
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
}
else if(res[1] === "color"){
  var backgroundColor = res[2];
  var color = res[2];
  ctx.fillStyle = color;
  ctx.fill();
}
else if(res[1] === "size"){
  diameter = parseInt(res[2]);
  radius = (diameter/2);

  clearCircle(radius, user_color);
  console.log("New raduis:" +radius);
}

 	var last = event.results.length-1;
  var command = event.results[last][0].transcript;


  // if (command == "color" + color) {
  // //var color = event.results[0][0].transcript;
  // diagnostic.textContent = 'Result received: ' + color + '.';
  // bg.style.backgroundColor = color;
  // console.log("Hello");
  // }
  
 
  console.log('Confidence: ' + event.results[0][0].confidence);
  console.log(event.results.length);
  //console.log(event.results[current][0].transcript + " Poop");
  console.log(color + " Poop");
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}