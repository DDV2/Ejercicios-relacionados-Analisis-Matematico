//metodo montecarlo para calculo de pi
//en referencia a https://www.youtube.com/watch?v=5cNnf_7e92Q
//en chrome, abrir consola con "ctrl+shift+j"
let r, x, y, total, circulo, recordPi;
function setup(){
	createCanvas(403, 403);
	background(0);
	translate(width/2, height/2);
	r = 200;
	total = 0;
	circulo = 0;
	recordPi = 0;
	rectMode(CENTER);
	noFill();
	stroke(255);
	ellipse(0, 0, r * 2 , r * 2);
	rect(0, 0, r * 2, r *2);
}

function draw(){
	translate(width/2, height/2);
	for(var i= 0; i< 1000; i++){
		x = random(-r, r);
		y = random(-r, r);
		let d = x * x + y * y;
		total++;
		if(d < r * r){
			circulo++;
			stroke(0, 255, 0, 100);
		}else{
			stroke(0, 50, 255, 100);
		}
		strokeWeight(1);
		point(x, y);
		let pie = 4 * (circulo/total);
		let recordDiff = Math.abs(Math.PI - recordPi);
		let diff = Math.abs(Math.PI - pie);
		if(diff < recordDiff){
			recordDiff = diff;
			recordPi = pie;
			console.log(recordPi);
		}
	}
}
