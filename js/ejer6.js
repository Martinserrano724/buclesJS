/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1 posicion i0 j0 
22 posicion i1 j1
333 posicion i2j2
4444
55555
666666
*/

for (let i = 0; i < 30; i++) {
   for (let j = 0; j < i; j++) {
    document.write(i);
   }
   document.write(`<br>`);
    
}
