function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if(usuario === "Admin"){
            resolve("Acceso Concedido");
        }else{
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

verificarUsuario("Axel")
    .then(res => console.log(res))
    .catch(err => console.log(err));
    