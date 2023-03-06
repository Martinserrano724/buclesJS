/* *15- Realiza un script que cuente el número de vocales que tiene un texto.
 */
let cadena = prompt("Ingrese la cadea de texto");
let contador = 0;
for (let index = 0; index < cadena.length; index++) {
  if (
    (cadena[index] == "A") ||
    (cadena[index] == "a") ||
    (cadena[index] == "e") ||
    (cadena[index] == "E") ||
    (cadena[index] == "i") ||
    (cadena[index] == "I") ||
    (cadena[index] == "O") ||
    (cadena[index] == "o") ||
    (cadena[index] == "U") ||
    (cadena[index] == "u")
  ) {
    contador++;
  }
}
document.write(`El numero de vocales es: ${contador} de la cadena: ${cadena}`)
