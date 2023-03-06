/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/

let num1 = parseInt(prompt("Ingrese un numero"));

if (isNaN(num1)) {
  alert("El dato ingresado No Es Un Numero.\nVolver a ingresar");
} else {
    while((
        confirm(
          "Presiona  enter para ingreasar un numero\n  Cancelar Para Dejar de ingresar."
        )
      )) {
    let num2;
    num2 = parseInt(prompt("Ingrese un numero"));
    if (isNaN(num2)) {
      alert("El dato ingresado No Es Un Numero.\nVolver a ingresar");
      
      num2=0
    } else {
      num1 = num1+ num2 ;
      
    }
  }
  document.write(`\nLa Sume de los numeros ingresados son: ${num1}`);
}
