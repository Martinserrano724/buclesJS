/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter
 sin usar el método replace.
 Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

 let cadena=prompt('Ingrese la cadea de texto');

 for (let index = 0; index < cadena.length; index++) {
    
    document.write(cadena[index]+'-')
    
 }