/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/


let nom1 = prompt(`ingresar el Primer Nombre`);
let edad1 = prompt('ingresar la edad');
//let pers1= [nom1,edad1];

let nom2 = prompt(`ingresar el Segundo Nombre`);
let edad2 =prompt('ingresar la edad');
//let pers2=[nom2,edad2];

let nom3 = prompt(`ingresar el Tercer Nombre`);
let edad3 =prompt('ingresar la edad');
//let pers3=[nom3,edad3];

let datos= [nom1 ,edad1 ,nom2,edad2,nom3,edad3];
const mayor=Math.max(edad1,edad2,edad3)


for (let index = 0; index < datos.length; index++) {
    if(datos[index] == mayor){
        document.write (`El nombre de la persona mas grande es: "${datos[index-1]}" con la edad de: '${datos[index]}'`);
    }
    
}

