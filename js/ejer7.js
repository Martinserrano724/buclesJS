/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let num1 = prompt(`ingresar el numero de piramide menor a 50`);

if (isNaN(num1)) {
  alert("El dato ingresado No Es Un Numero.\nVolver a ingresar");
} else {
    if(num1 <= 50){
        for (let i = num1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
              document.write(i);
            }
            document.write(`<br>`);
          }
    }
    else{
        alert("El dato ingresado Es mayor a 50");
    }
 
}
