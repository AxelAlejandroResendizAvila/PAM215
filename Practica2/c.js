const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 },
];

const personaEncontrada = personas.find(p => p.nombre === "Luis");
console.log(personaEncontrada.nombre); 
//Salida: Luis
const imprimirPersonas = personas.forEach(p => console.log(p));
//Salida: Ana Luis María
const sumaEdades = personas.reduce((total, p) => total + p.edad, 0);
console.log(sumaEdades);