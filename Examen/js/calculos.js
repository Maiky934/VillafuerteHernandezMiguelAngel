document.addEventListener('DOMContentLoaded', function () {
    var calcularBtn = document.getElementById("calcular");
    calcularBtn.onclick = function () {
        calcular();
    };

    var borrarBtn = document.getElementById("borrar");
    borrarBtn.onclick = function () {
        borrarDatos();
    };
});

function calcular() {
    var capital = parseFloat(document.getElementById("capital").value);
    var porcentaje = parseFloat(document.getElementById("porcentaje").value) / 100;
    var dias = parseInt(document.getElementById("dias").value);

    if (!isNaN(capital) && !isNaN(porcentaje) && !isNaN(dias) && capital > 0 && dias > 0) {
        mostrarResultados(dias, capital, porcentaje);
    } else {
        alert("Por favor, ingrese valores válidos para capital, porcentaje y días.");
    }
}

function mostrarResultados(dias, capital, porcentaje) {
    var tablaResultados = document.getElementById("tablaResultados");
    tablaResultados.innerHTML = "";

    for (let i = 1; i <= dias; i++) {
        var resultado = (capital * (1 + porcentaje / 100) ** i).toFixed(2);

        var fila = document.createElement("tr");
        fila.innerHTML = "<td>Día " + i + "</td><td>$" + resultado + "</td>";

        tablaResultados.appendChild(fila);
    }

    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.style.display = "block";
}

function borrarDatos() {
    document.getElementById("capital").value = "";
    document.getElementById("porcentaje").value = "93";
    document.getElementById("dias").value = "";

    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.style.display = "none";

    var tablaResultados = document.getElementById("tablaResultados");
    tablaResultados.innerHTML = "";
}
