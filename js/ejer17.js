/* 17- Realiza un script que muestre la posición de la primera vocal de un texto 
introducido por teclado.

*/
let cadena = prompt("Ingrese la cadea de texto");
let contador = 0;
for (let index = 0; index < cadena.length; index++) {
    
  if (
   ( (cadena[index] == "A") ||
    (cadena[index] == "a") ||
    (cadena[index] == "e") ||
    (cadena[index] == "E") ||
    (cadena[index] == "i") ||
    (cadena[index] == "I") ||
    (cadena[index] == "O") ||
    (cadena[index] == "o") ||
    (cadena[index] == "U") ||
    (cadena[index] == "u")) && contador==0
  ) {
    contador= (index+1);
  }
}
document.write(`La posicion de la Primer vocal es: '${contador}' de la cadena: '${cadena}'`);
