/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
 */

let num1 = prompt(`ingresar el numero de piramide menor a 50`);

if (isNaN(num1)) {
  alert("El dato ingresado No Es Un Numero.\nVolver a ingresar");
} else {
    if(num1 <= 50){
       
for (let i = 0; i < num1; i++) {
    for (let j = 0; j < i; j++) {
     document.write(j+1);
    }
    document.write(`<br>`);
     
 }
    }
    else{
        alert("El dato ingresado Es mayor a 50");
    }
 
}
