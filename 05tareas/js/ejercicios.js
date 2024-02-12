function validar(e){

    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8){
        return true;
    }

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    
    return patron.test(codigo);
        
    
}


function interes(){
    var sueldo = parseInt(document.formulario.sueldo.value);
    console.log("sueldo: " + sueldo);
    var valor = parseInt(document.formulario.venta1.value) +parseInt(document.formulario.venta2.value) + parseInt(document.formulario.venta3.value);
    console.log("ventas: " + valor);
    var resultado = valor;
    var interes = resultado * .1;
    var total = interes + resultado + sueldo;

    document.formulario.sueldoI.value = "$"+total;
}

function borrarDatosEjercicio2(){
    document.formulario.sueldoI.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}
//
function descuentosTienda(){
    var valor = parseInt(document.formulario.subtotal.value);
    console.log("subtotal: " + valor);
    var resultado = valor;
    var interes = resultado * .15;
    var total =  resultado - interes;

    document.formulario.sueldoI.value = "$"+total;
}

function borrarDatosEjercicio3(){
    document.formulario.sueldoI.value = "";
    document.formulario.subtotal.value = "";
}
// 
function descuentosCalficacion(){
    var valorCal = parseInt(document.formulario.cal1.value) + parseInt(document.formulario.cal2.value) + parseInt(document.formulario.cal3.value);
    console.log("calificaciones: " + valorCal);
    var valorExam = parseInt(document.formulario.calExamen.value);
    console.log("examen: " + valorExam);
    var valorTrabajo = parseInt(document.formulario.calTrabajo.value);
    console.log("trabajo: " + valorTrabajo);

    
    var promCal = valorCal/3 * .55;
    var promExam = valorExam * .30;
    var promTrabajo = valorTrabajo * .15;
    var total =  promCal + promExam + promTrabajo;

    document.formulario.sueldoI.value = total;
}

function borrarDatosEjercicio4(){
    document.formulario.cal1.value = "";
    document.formulario.cal2.value = "";
    document.formulario.cal3.value = "";
    document.formulario.calExamen.value = "";
    document.formulario.calTrabajo.value = "";
    document.formulario.sueldoI.value = "";
}
//

function alumnos(){
    var totalAlumnos = parseInt(document.formulario.mujeres.value) + parseInt(document.formulario.hombres.value);
    console.log("total alumnos" + totalAlumnos);
    var totalHombres = parseInt(document.formulario.hombres.value);
    console.log("total alumnos" + totalHombres);
    var totalMujeres = parseInt(document.formulario.mujeres.value);
    console.log("total alumnos" + totalMujeres);

    
    var promHombres = (totalHombres/totalAlumnos) * 100;
    var promMujeres = (totalMujeres/totalAlumnos) * 100;

    document.formulario.sueldoI.value = promHombres + "%";
    document.formulario.sueldoII.value = promMujeres + "%";
}

function borrarDatosEjercicio5(){
    document.formulario.mujeres.value = "";
    document.formulario.hombres.value = "";
    document.formulario.sueldoI.value = "";
    document.formulario.sueldoII.value = "";
}

//

function edad(){

    var fechaActual = new Date();

    var fechaNacimiento = document.formulario.año.value;
    var fechaNac = new Date(fechaNacimiento);

    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
      
      // Ajusta la edad si aún no ha pasado el cumpleaños este año
      if (fechaActual.getMonth() < fechaNac.getMonth() || 
          (fechaActual.getMonth() === fechaNac.getMonth() && 
          fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
      }

    console.log("fecha acual" + fechaActual);
    console.log("fecha nacimiento" + fechaNac);

    
    

    document.formulario.sueldoI.value = edad + " años";
}

function borrarDatosEjercicio6(){
    document.formulario.año.value = "";
    document.formulario.sueldoI.value = "";
}

//
function numeros(){

    var num1 = parseInt(document.formulario.num1.value);
    console.log("primer numero" + num1);
    var num2 = parseInt(document.formulario.num2.value);
    console.log("segundo numero" + num2);

    if(num1 == num2){
        var resultado = num1 * num2;
        document.formulario.sueldoI.value = num1 + " * " +  num2 +" = " + resultado;
    }else if(num1 > num2){
        var resultado = num1 - num2;
        document.formulario.sueldoI.value = num1 + " - " +  num2 +" = " + resultado;
    }else if(num1 < num2){
        var resultado = num1 + num2;
        document.formulario.sueldoI.value = num1 + " + " +  num2 +" = " + resultado;
    }
        
    

}

function borrarDatosEjercicio7(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.sueldoI.value = "";
}

//

function numeroMayor(){

    var num1 = parseInt(document.formulario.num1.value);
    console.log("primer numero" + num1);
    var num2 = parseInt(document.formulario.num2.value);
    console.log("segundo numero" + num2);
    var num3 = parseInt(document.formulario.num3.value);
    console.log("tercer numero" + num3);

    if(num1 > num2 && num1 > num3){
        document.formulario.sueldoI.value = num1;
    }else if(num2 > num1 && num2 > num3){
        document.formulario.sueldoI.value = num2;
    }else if(num3 > num1 && num3 > num2){
        document.formulario.sueldoI.value = num3;
    } else{
        document.formulario.sueldoI.value = num3;
    }
        
    

}

function borrarDatosEjercicio8(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    document.formulario.sueldoI.value = "";
}

//
function horas(){

    var num1 = parseInt(document.formulario.num1.value);
    console.log("precio * hora" + num1);
    var num2 = parseInt(document.formulario.num2.value);
    console.log("horas trabajadas" + num2);

    if(num2 <= 40){
        var horasNormales = num2;
        console.log("horas normales" + horasNormales);
        var pago = horasNormales * num1;
        document.formulario.sueldoI.value = "$" + pago;
    }else if(num2 > 40 && num2 <= 48){
        var horasNormales = 40;
        console.log("horas normales" + horasNormales);
        var horasDobles = num2-40;
        console.log("horas dobles" + horasDobles);
        var pago = horasNormales * num1 + (horasDobles * num1 * 2);
        document.formulario.sueldoI.value = "$" + pago;
    }else if(num2 > 48 ){
        var horasNormales = 40;
        console.log("horas normales" + horasNormales);
        var horasDobles = 8;
        console.log("horas dobles" + horasDobles);
        var horasTriples = num2-48;
        console.log("horas triples" + horasTriples);
        var pago = horasNormales * num1 + (horasDobles * num1 * 2) + (horasDobles * num1 * 3);
        document.formulario.sueldoI.value = "$" + pago;
    }
        
    

}

function borrarDatosEjercicio9(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.sueldoI.value = "";
}

//
function utilidades(){

    var num1 = parseInt(document.formulario.num1.value);
    console.log("total de meses trabajados: " + num1);
    var num2 = parseInt(document.formulario.num2.value);
    console.log("salario mensual: " + num2);

    if(num1 < 12){
        var utilidades = num2* 1.05;
        console.log("utilidades: " + utilidades);
        document.formulario.sueldoI.value = "$" + utilidades;
    }else if(num1 >= 12 && num1 < 24){
        var utilidades = num2* 1.07;
        console.log("utilidades: " + utilidades);
        document.formulario.sueldoI.value = "$" + utilidades;
    }else if(num1 >= 24 && num1 < 60){
        var utilidades = num2* 1.1;
        console.log("utilidades: " + utilidades);
        document.formulario.sueldoI.value = "$" + utilidades;
    }else if(num1 >= 60 && num1 < 120){
        var utilidades = num2* 1.15;
        console.log("utilidades: " + utilidades);
        document.formulario.sueldoI.value = "$" + utilidades;
    }else if(num1 >= 120){
        var utilidades = num2* 1.2;
        console.log("utilidades: " + utilidades);
        document.formulario.sueldoI.value = "$" + utilidades;
    }
    
        
    

}

function borrarDatosEjercicio10(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.sueldoI.value = "";
}