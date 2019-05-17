let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//haar
context.beginPath();
context.arc(200,150,150,0,2*Math.PI);
context.stroke();
context.fillStyle = "#6d4100"; //#endregion
context.fill();

//shirt
context.beginPath();
context.arc(200,550,250,0,2*Math.PI);
context.stroke();
context.fillStyle = "#433E4C";
context.fill();


//oor
context.beginPath();
context.arc(350,150,30,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "#ffe0bd";
context.fill();

//oor
context.beginPath();
context.arc(50,150,30,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "#ffe0bd";
context.fill();


//hoofd
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.stroke();
context.fillStyle = "#ffe0bd";
context.fill();

//oog
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "#ffff";
context.fill();

//oog
context.beginPath();
context.arc(275,130,40,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "#ffff";
context.fill();

//pupil
context.beginPath();
context.arc(275,150,10,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "black";
context.fill();

//pupil
context.beginPath();
context.arc(130,150,10,0,2*Math.PI);
context.closePath();
context.stroke();
context.fillStyle = "black";
context.fill();


//mond
context.beginPath();
context.arc(200,200,50,0,1*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();