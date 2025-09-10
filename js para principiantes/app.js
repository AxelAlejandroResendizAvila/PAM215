//tipos de datos
console.log("Esto es un string");
console.log(1234);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({ nombre: "Juan", edad: 30, pais: "México" });

//variables
var nombre = "Juan";
let apellido = "Pérez";

//reasignando valor a la variable nombre
nombre = "Carlos";

console.log(nombre);
console.log(apellido);

//Constante
const PI = 3.1416;
console.log(PI);

// suma de dos variables declaradas con camelCase
let numeroUno = 10;
let numeroDos= 5;

let resultado = numeroUno + numeroDos;

let nombreCompleto = nombre + ' ' + apellido;

console.log('resultado:', resultado);
console.log('Nombre completo:', nombreCompleto);


//Validaciones

let contraseña = 'Axel1234';
let entrada = 'Axel1234';

resultado = contraseña == entrada;

if(resultado){
    console.log('Contraseña correcta');
}else{
    console.log('Contraseña Incorrecta');
}

//Validaciones anidadas

let score = 70;

if(score > 30){
    console.log('Necesitas practicar más');
}else if(score > 15){
    console.log('Estás mejorando');
} else{
    console.log('Sigue el tutorial');
}

//Switch case

let typeCard = 'credito';

switch(typeCard){
    case 'debito':
        console.log('Debito');
        break;
    case 'credito':
        console.log('Credito');
        break;
    default:
        console.log('valor válido');
}

//while
let i = 1; //Variable de iteración

while (i <= 10){
    console.log(i);
    i++;
}

//for
let nombres = ['juan', 'pablo', 'pepe', 'carlos', 'pepito', 'fernando', 'luis', 'daniel'];

for(i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

//funciones
function saludo(name){
    
    console.log('hola,', name);
}

saludo('juan');


function add(a, b){
   console.log(a + b);
}

 add(3, 2);
 add(100, 400);
 add(3, 'ABCD');
 