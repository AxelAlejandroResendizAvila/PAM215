
//Definir la clase
class inicioPAM{
    //definir los metodos
        reglamentoPOO(){
            //retornar el codigo HTML de la imagen
            return '<img src="assets/images/reglamentoPOO.png" alt="Reglamento POO" />'
            ;
        }
        lineamientosClassroom(){
            //retornar el codigo HTML de la imagen
              return '<img src="assets/images/lineamientosClassroom.png" alt="Lineamientos Classroom" />';
        }
        fechasDeParciales(){
            //retornar el codigo HTML de la imagen
            return '<img src="assets/images/fechasDeParciales.png" alt="Fechas de Parciales" />';
        }
        porcentajesPorParcial(){
            //retornar el codigo HTML de la imagen
            return '<img src="assets/images/porcentajesPorParcial.png" alt="Porcentajes por Parcial" />';
        }
            
    }

//funcion para mostrar en pantalla
function info(tipo){
    //crear un objeto
    const obj = new inicioPAM();
    //variable para guardar el resultado
    let resultado = '';
    //llamar al metodo dependiendo del tipo
    switch(tipo){
        case "reglamentoPOO":
            resultado = obj.reglamentoPOO();
            break;
        case "lineamientosClassroom":
            resultado = obj.lineamientosClassroom();
            break;
        case "fechasDeParciales":
            resultado = obj.fechasDeParciales();
            break;
        case "porcentajesPorParcial":
            resultado = obj.porcentajesPorParcial();
            break;
    }
    //mostrar en pantalla el resultado
    document.getElementById("resultado").innerHTML = resultado;

    //mostrar o esconder el div dependiendo si hay resultado
    if(resultado){
        //mostrar el div
        document.getElementById("resultado").style.display = "flex";
    }else{
        //esconder el div
        document.getElementById("resultado").style.display = "none";
    }
 
}

