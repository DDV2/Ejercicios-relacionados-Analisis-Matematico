let a, b, raiz, margenError;
//0.000000000000001
function setup() {
	createCanvas(600, 230);
	// angleMode(DEGREES);
	//se crashea al 0.000000000000001
	margenError = 1/10;
	calculodeRaiz();
}
function f(x){
	/*esta operacion matematica define la formula de nuestra funcion
	si se quiere cambiar de funcion, cambiar la operacion
	masInfo de como usar estas operaciones
	en https://www.w3schools.com/js/js_math.asp
	*/
	return Math.pow(x, 3) - 3*x +1;
}
function calculodeRaiz(){
	background(200);
	textSize(30);
	//funcion de ejemplo (definida en funcion f(x){} )
	text("ej: f(x)= x^3 -3x +1", 20, 50);

	for(var i = 100; i > -100; i-= 1){
		/* chequea por nosotros el valor de f(x) en un orden de 100 a -100 para determinar cada ves mejor
		el valor de a y b para las cotas de bolzano
		*/
		if(f(i) > 0){
			b = i;
		}
		if(f(i*-1) < 0){
			a = i * -1;
		}
	}

	text("Cotas Bolzano:", 20, 170);
	text( a + "(", 20, 200);
	text(")" + b , 90, 200);
	/* Este bucle le da aun mas exactitud a los valores de a y b, mientras que la resta entre
	a y b sea mayor al margen de error que hayamos especificado (menor margen de error, mas precision de a y b)
	*/
	while(Math.abs(a - b) > margenError){
		if( f((a + b)/2) > 0){
			b = (a+b)/2;
		} else if( f((a + b)/2) < 0){
			a = (a + b)/2;
		}
	}
	// Una vez terminado el bucle while, se da una aproximacion de la raiz haciendo un promedio
	raiz = (a+b)/2;
	text("Una raiz de f(x) es x = ", 20, 105);
	text(raiz, 20, 135);
	textSize(20);
}
