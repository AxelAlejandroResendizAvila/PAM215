function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve("Datos recibidos correctamente");
                console.log("Datos recibidos correctamente");
          
        }, 5000);
    });
}

async function obtenerDatos() {
    try{
        await simularPeticionAPI();    
    }catch(e){
        console.log(e);
    }
}
obtenerDatos();

