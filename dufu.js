function changeColor(){ 
var color="red|orange|yellow|green|blue|purple"; 
color=color.split("|"); 
document.getElementById("blink").style.color=color[parseInt(Math.random() * color.length)]; } 
setInterval("changeColor()",300); 