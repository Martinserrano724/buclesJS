/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: 
 (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


*/

let letrasDni ;
let dni ;
const arrayLetras =["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
while (
  confirm(
    "Presiona  enter para ingreasar un Dni\n  Cancelar Para Dejar de ingresar."
  )
) {
  dni = parseInt(prompt("Ingrese un Dni"));
  if (isNaN(dni)) {
    alert("El dato ingresado No Es Un Dni.\nVolver a ingresar");
  } else {
    if(dni>0 && dni<99999999){
        letrasDni = dni%23;
        alert(`La letra del Dni: ${dni} es: ${arrayLetras[letrasDni]}`);
    }
    else{
        alert(`Numero fuera del rango entre 0 a 99999999`);
    }

  }
}
document.write(`\nLa Sume de los numeros ingresados son: ${num1}`);
