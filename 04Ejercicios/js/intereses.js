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
    var valor = document.formulario.cantidad.value;
    console.log(valor);
    var resultado = parseInt(valor);
    var interes = resultado * .02;
    var total = interes + resultado;

    document.formulario.sueldoI.value = "$"+total;
}

function borrarDatos(){
    document.formulario.cantidad.value = "";
    document.formulario.sueldoI.value = "";
}