/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


 */

let filas = prompt(`ingresar el numero de filas`);
let colum = prompt(`ingresar el numero de Columnas`);
let contador= (filas*colum);
if (isNaN(filas) && isNaN(colum)) {
  alert("El dato ingresado No Es Un Numero.\nVolver a ingresar");
} else {
    
       
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < colum; j++) {
    if(contador < 10 ){
        document.write('_|  0'+contador + ' |_');
        contador--;
    }
    else{
        document.write('_|  '+contador + ' |_');
        contador--;
    }
     
     
    }

    document.write(`\t<br>`);
     
 }
    
 
}