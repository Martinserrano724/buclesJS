//1- Escribir un programa que solicite la edad y si es mayor de 18 años 
//mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let num1 = parseInt(prompt ('¿Ingrese numero 1?'));

if( !isNaN(num1)){

    if(num1>=18){
        document.write('Puede Conducir ');
    }else{
        document.write('No puede Conducir debido que es menor de 18 anios ');
    }
}
else{
    document.write(' Se ingreso un valor que no es un numero ');
}


