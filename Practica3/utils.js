export function resta(a,b){
    return a - b;
}
export function verificarUsuario(usuario){
    verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));
}