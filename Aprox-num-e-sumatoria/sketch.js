var aprox, t;
function setup() {
	//crea el lienzo
	createCanvas(500, 760);
	background(200);
	//declaro las variables
	aprox = 1;
	t = 1;
	//loop que aproxima el valor de e .
	for(var i = 1; i<26; i++){
		t = t/i
		aprox = aprox + t;
		//para verlo en la consola -- (Para abrir la consola en chrome "ctrl+shift+j")
		console.log("Aproximacion con el polinomio de orden" + i + " : " + aprox);
		//para verlo en el lienzo
		text("Aproximacion con el polinomio de orden " + i + " : " + aprox, 20, 30 * i);
	}

}

//FORMA INEFICAZ xD
// function setup(){
// 	//esto para crear el lienzo
// 	createCanvas(500, 90);
// 	background(100);
// 	//texto que muestra la aproximacion
// 	textSize(30);
// 	text(eaprox(), 100,50);
// }
//calculo de la aproximacion
// function eaprox(){
// 	let aproximacion = 0;
// 	for(var i = 0; i < 25; i++){
// 		aproximacion += 1/(factorial(i));
// 	}
// 	return aproximacion;
// }
// //calculo de un factorial
// function factorial(n){
// 		let fact = 1;
// 		for(var i = n; i > 0; i--){
// 			fact = fact * i
// 		}
// 		return fact;
// }
