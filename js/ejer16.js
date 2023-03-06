/*16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */
 let cadena = prompt("Ingrese la cadea de texto");
 let Cadena2 = '';
 for (let index = cadena.length; index > 0; index--) {
    Cadena2+=cadena[index-1]
 }
 document.write(`La cadena ingresada es: ${cadena} la cadena es: ${Cadena2}`)