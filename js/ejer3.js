/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

Dific

*/
let cad1 =prompt("Ingrese una cadena de texto");
while(confirm("Presiona  enter para ingreasar una cadena\n  Cancelar Para Dejar de ingresar.")){
cad1 = cad1+' - '+prompt("Ingrese una cadena de texto");
}
document.write(`la cadenas ingresadas son:\n${cad1}`);


