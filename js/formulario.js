function verificarDatos(event){
    var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var email = document.getElementById('email');
	var dia1 = document.getElementById('dia1');
	var anio1 = document.getElementById('anio1');
	var mes1 = document.getElementById('mes1');
    var dia2 = document.getElementById('dia2');
	var anio2 = document.getElementById('anio2');
	var mes2 = document.getElementById('mes2');
    nombre.className = "";
    anio1.className = "";
    anio2.className = "";

    var validez = true;
	var validezFecha = true;

    if (!nombre.value || !validarNombre(nombre)) {
        validez = false;
        marcarError(nombre, "nombre incompleto");
    }
    
    if (!apellido.value || !validarNombre(apellido)) {
        validez = false;
        marcarError(apellido, "apellido incompleto");
    }
    
    if (!email.value || !validarEmail(email)) {
        validez = false;
        marcarError(email, "email incompleto o invalido");
    }

    if (!anio1.value || !validarAnio1(anio1)) {
		validez = false;
		validezFecha = false;
		marcarError(anio1, "año incompleto o invalido");
	}

    if (!anio2.value || !validarAnio2(anio2)) {
		validez = false;
		validezFecha = false;
		marcarError(anio2, "año incompleto o invalido");
	}

    if (!mes1.value || !validarMes1(mes1)) {
		validez = false;
		validezFecha = false;
		marcarError(mes1, "mes incompleto o invalido");
	}

    if (!mes2.value || !validarMes2(mes2)) {
		validez = false;
		validezFecha = false;
		marcarError(mes2, "mes incompleto o invalido");
	}

    if (!dia1.value || !validarDia1(dia1)) {
		validez = false;
		validezFecha = false;
		marcarError(dia1, "día incompleto o invalido");
	}

    if (!dia2.value || !validarDia2(dia2)) {
		validez = false;
		validezFecha = false;
		marcarError(dia2, "día incompleto o invalido");
	}

    if (validezFecha && !validarFecha1(dia1,mes1,anio1)) {
		validez = false;
		dia1.className = "incompleto";
		mes1.className = "incompleto";
		anio1.className = "incompleto";
		alert("fecha invalida");
	}

    if (validezFecha && !validarFecha2(dia2,mes2,anio2)) {
		validez = false;
		dia2.className = "incompleto";
		mes2.className = "incompleto";
		anio2.className = "incompleto";
		alert("fecha invalida");
	}

    if (validez) {
		var respuesta = document.getElementById('respuesta');
		respuesta.innerHTML = "Su informacion fue registrada correctamente";
		respuesta.className = "registrarse";
		document.getElementById('form').reset();
	}
	event.preventDefault();

}


function marcarError(campo, txt){
    alert(txt);
    campo.className = "incompleto";
}

// funcion que verifica los dias de la fecha de ingreso
function validarDia1(dia) {
	return (dia.value > 0 && dia.value < 32 && dia.value);
}

// funcion que verifica los dias de la fecha de salida
function validarDia2(dia) {
	return (dia.value > 0 && dia.value < 32);
}


// funcion que verifica los meses de la fecha de ingreso
function validarMes1(mes) {
	return ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"].includes(mes.value);
}

// funcion que verifica los meses de la fecha de salida
function validarMes2(mes) {
	return ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"].includes(mes.value);
}


//funcion que verifica el anio de la fecha de ingreso
function validarAnio1(anio) {
    return (anio.value >= parseInt((new Date).getFullYear()));
}

//funcion que verifica los anios de la fecha de salida
function validarAnio2(anio) {
    return (anio.value >= parseInt((new Date).getFullYear()));
}


//funcion que verifica la fecha de ingreso
function validarFecha1(dia, mes, anio) {
	var validez = true;
	if (["abril", "junio","noviembre"].includes(mes.value) && dia.value > 30) {
		validez = false;
	} else if (["diciembre", "octubre", "agosto", "julio", "marzo", "enero"].includes(mes.value) && dia.value > 31) {
		validez = false;
	} else if (mes.value=="febrero" && dia.value > 28 && !((anio.value % 4 == 0 && anio.value % 100 != 0) || anio.value % 400 == 0)) {
	 	validez = false;
	}
	return validez;
}

//funcion que verifica la fecha de salida
function validarFecha2(dia, mes, anio) {
	var validez = true;
	if (["abril", "junio","noviembre"].includes(mes.value) && dia.value > 30) {
		validez = false;
	} else if (["diciembre", "octubre", "agosto", "julio", "marzo", "enero"].includes(mes.value) && dia.value > 31) {
		validez = false;
	} else if (mes.value=="febrero" && dia.value > 28 && !((anio.value % 4 == 0 && anio.value % 100 != 0) || anio.value % 400 == 0)) {
	 	validez = false;
	}
	return validez;
}

function validarEmail(email) {
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return expr.test(email.value);
}

function validarNombre(nombre){
    var expr = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos(min 1, max 40).
    return expr.test(nombre.value);
}