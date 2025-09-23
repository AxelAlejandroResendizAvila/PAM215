const persona = {
    nombre: "Axel Reséndiz",
    edad: "20",
    direccion:{
        ciudad: "Qro",
        pais: "MX"
    }
};

//Desestructuración
const {nombre, edad, direccion} = persona;
console.log("Me llamo " + nombre + ", tengo " + edad + " años " + "y vivo en " + direccion.ciudad);
// Salida: Me llamo Axel Reséndiz, tengo 20 años y vivo en Qro