"use strict"

var Visualize ={
	canvas: undefined,
	canvasContext: undefined
};
Visualize.start = function ()
{
	Visualize.canvas = document.getElementById("displayBar");
	Visualize.canvasContext = document.getElementById("2d");

	Visualize.object = obj;
	Visualize.draw();
};

Visualize.draw = function (){

	new Chart(document.getElementById('displayBar'),{
		type: 'bar',
		data: {
			labels: ["Manhattan", "Brooklyn", "Bronx", "Queens"],
			datasets: [
				{	
					label: "Leaning-Bars, per Borough",
					backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
					data:[man_count, Bklyn_count, Bronx_count, Queens_count]
				}
			]
		},
		options: {
			scales: {
            	yAxes: [{
                	ticks: {
                    	beginAtZero: true
                	}
            	}]
        	},
			legend:{ display:false},
			title: {
				display:true,
				text: "Total Leaning-Bars for Select Bus Service stops, per borough, NYC"
			}
		
		}
	});
	new Chart(document.getElementById("displayPie"), {
    type: 'pie',
    data: {
      labels: ["Manhattan", "Brooklyn", "Bronx", "Queens"],
      datasets: [{
        label: "Leaning-Bars, per Borough",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [man_count, Bklyn_count, Bronx_count, Queens_count]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total Leaning-Bars for Select Bus Service stops, per borough, NYC'
      }
    }
});
	console.log(Bronx_count);
};
var Man = 'Manhattan';
var Bklyn = "Brooklyn";
var Bronx = "Bronx";
var Queens = "Queens";

var man_count = 0;
var Bklyn_count = 0;
var Bronx_count = 0;
var Queens_count = 0;

function countMe(){
	for(var i = 0; i < obj.length; i++){
		if(obj[i].Borough == Man){
			man_count++;
		}else if(obj[i].Borough ==Bklyn){
			Bklyn_count++;
		}else if(obj[i].Borough == Bronx){
			Bronx_count++;
		}else if(obj[i].Borough == Queens){
			Queens_count++;
		} else return;
}
console.log(man_count);
Visualize.start();
}


