var numero = parseInt(prompt("Ingrese los números "));
var resultado;

switch (true) {
    case numero < 0 || numero >= 1000:
        alert("Número no válido");
        break;

    case numero > 0 && numero < 10:
        resultado = numero * numero;
        alert("El resultado es " + resultado);
        break;

    case numero >= 10 && numero < 100:
        resultado = numero * 2;
        alert("El resultado es " + resultado);
        break;

    case numero >= 100 && numero < 1000:
        resultado = numero - 100;
        alert("El resultado es " + resultado);
        break;

    default:
        alert("Número no válido");
        break;
}








