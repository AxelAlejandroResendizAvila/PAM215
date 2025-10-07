
function obtenerUsuario(user){
    return new Promise ((resolve, reject) => {
        if(user === "admin"){
            resolve("Acceso Concedido");
        }else{
            reject("Acceso denegado");
        }
    });
}

async function verficarUsuario(user){
    try{
        await obtenerUsuario(user);
        console.log("Acceso Concedido");
    }catch(e){
        console.log(e);
    }

}

// verficarUsuario("admin");
// verficarUsuario("Axel");

const alumnos = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Luis", calificacion: 55 },
  { nombre: "María", calificacion: 70 },
  { nombre: "Pedro", calificacion: 40 }
];

const aprobados = alumnos.filter(alumno => alumno.calificacion >= 60).map(alumno => alumno.nombre);
aprobados.forEach(alumno => {
    //console.log("Felicidades " + alumno + " aprobaste!");    
});

function suma(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a && b){
                resolve(a + b);
            } else {
                reject("Faltan parámetros para la suma.");
            }
        }, 1000);
    });
}   
 
async function obtenerSuma(a, b){
    try{
        const resultado = await suma(a, b);
        console.log(resultado);

    }catch(error){
        console.log(error);
    }
}


// obtenerSuma(2, 3)
// obtenerSuma(-2, )

const ventas = [
    {producto: "A", cantidad: 5},
    {producto: "B", cantidad: 10},
    {producto: "C", cantidad: 15},
];

function obtenerDatos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ventas.reduce((total, venta) => total + venta.cantidad, 0));
        }, 2000);
    })
}

function obtenerDatos2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ventas.map(venta => venta.producto));
        }, 2000);
    })
}


async function mostrarDatos(){
    try{
        const datos = await obtenerDatos();
        const productos = await obtenerDatos2();
        console.log(datos);
        console.log(productos);
    }catch(error){
        console.log(error);
    }
}
//mostrarDatos();

function validarOperacion(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(a && b){
                resolve("El resultado es: " + a/b);
            } else {
                reject("La operación es inválida");
            }
        },1000);
    });
}

async function dividir(a, b) {
    try{
        const resultado = await validarOperacion(a, b);
        console.log(resultado);
    }catch(e){
        console.error(e);
    }
    
}

//dividir(1, 1);

let arr = [ 1, 2, 3, 4, 5, 6 ];
const PI = 3.1416;
const filtro = arr.filter(par => (par%2 === 0))
const operacion = filtro.map(porPi => (porPi * PI));
console.log(operacion.sqrt(x ));