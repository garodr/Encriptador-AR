//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

function encriptar() {
	var texto = document.getElementById("ingreso-texto").value.toLowerCase();
	//i es para que cambie mayusculas y minusculas
	// g es para que cambie toda la linea
	//la m es para que cambie multiples lineas
	var textoCodificado = texto.replace(/e/img,"enter");
	var textoCodificado = textoCodificado.replace(/o/img,"ober");
	var textoCodificado = textoCodificado.replace(/i/img,"imes");
	var textoCodificado = textoCodificado.replace(/a/img,"ai");
	var textoCodificado = textoCodificado.replace(/u/img,"ufat");
	document.getElementById("imgMuñeco").style.display = "none";
	document.getElementById("texto-1").style.display = "none";
	document.getElementById("texto-2").innerHTML = textoCodificado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherIt"; 
}

function desencriptar() {
	var texto = document.getElementById("ingreso-texto").value.toLowerCase();
	//i es para que cambie mayusculas y minusculas
	// g es para que cambie toda la linea
	//la m es para que cambie multiples lineas
	var textoCodificado = texto.replace(/enter/img,"e");
	var textoCodificado = textoCodificado.replace(/ober/img,"o");
	var textoCodificado = textoCodificado.replace(/imes/img,"i");
	var textoCodificado = textoCodificado.replace(/ai/img,"a");
	var textoCodificado = textoCodificado.replace(/ufat/img,"u");
	document.getElementById("imgMuñeco").style.display = "none";
	document.getElementById("texto-1").style.display = "none";
	document.getElementById("texto-2").innerHTML = textoCodificado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherIt"; 
}

function copiar() {
	var textoCopiado = document.querySelector("#texto-2");
	textoCopiado.select(); 
	document.execCommand("copy");
	alert("Copiado!");
}