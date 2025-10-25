import { Text, StyleSheet, View, ImageBackground, Animated, Easing, Button, TextInput, Alert , Switch} from 'react-native'
import React,{ useEffect, useState } from 'react';

export default function FondosScreen() {
    const[cargando,setCargando]= useState(true);
    const desvanecido = new Animated.Value(1);
    const[nombre,setNombre] = useState('');
    const[correo,setcorreo] = useState('');
    const [esEncendido, cambiarEncendido] = useState(false);
    const [correoError, setCorreoError] = useState(false);

    
    const mostrarAlerta = () => {
        const validateCorreo = (correo) => {
        // Expresión regular básica para validar el formato del correo
        const CorreoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (CorreoRegex.test(correo)) {
          setCorreoError(false);
        } else {
          setCorreoError(true);
        }
      };
      validateCorreo(correo);
      if(nombre.trim() === '' && correo.trim() === ''){    
        Alert.alert("Error, favor de llenar todos los campos (Móvil)");
        alert("Favor de llenar todos los campos (Web)");
      }else if(nombre.trim() === '') {
        Alert.alert("Error, favor de llenar el campo del nombre(Móvil)");
        alert("Favor de llenar el campo del nombre (Móvil)");
      }else if( correo.trim() === ''){
        Alert.alert("Error, favor de llenar el campo del correo(Móvil)");
        alert("Favor de llenar el campo del correo (Móvil)");
      }else if(esEncendido === false){
        Alert.alert("Error, favor de aceptar los términos y condiciones(Móvil)");
        alert("Favor de aceptar los términos y condiciones(Web)");
      }else if(correoError){
         Alert.alert("Error, ingresa un correo valido(Móvil)");
        alert("Favor de ingresar un correo valido(Web)");
      }else {
         //Alert para móvil
        Alert.alert(`Registro exitoso`,`Nombre: ${nombre}\ncorreo: ${correo}`
        );
        //Alert para web
        alert(`Registro exitoso\n
          Nombre: ${nombre}\n
          correo: ${correo}\n`
        );
      }
    }

    useEffect(()=>{
      const timer = setTimeout(()=>{
        Animated.timing(desvanecido, {
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(()=> setCargando(false));

      }, 2000);
      return()=> clearTimeout(timer);
    },[]);

    if(cargando) {
      return(
        <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
          <ImageBackground
            source={require('../assets/Tijeras.jpg')}
            resizeMode='contain'
            style={styles.splashImage}
          >
            <Text style={styles.splashText}> Cargando </Text>
          </ImageBackground>
        </Animated.View>
      );
    }


    return (
      <ImageBackground
        source={require('../assets/Background.png')}
        resizeMode='cover'
        style={styles.background}
      > 
                <View style={styles.registroContainer}>
          <Text style={styles.titulo}>Registro de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder='Escribe tu nombre aquí'
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder='Escribe tu correo aquí'
            value={correo}
            onChangeText={setcorreo}
            

          /> 
          <View style={styles.cajaTerminos}>
            <Text style={styles.etiquetas}> Aceptar términos y condiciones </Text>
            <Switch
              value={esEncendido}
              onValueChange={ () => cambiarEncendido(!esEncendido) }
              trackColor={{true: 'green', false: 'gray'}}
            >

            </Switch>
          </View>
          <Button
            color={'#0000006f'}
            title='Registrarse'
            onPress={mostrarAlerta}
          />
        </View>
      </ImageBackground>
    )

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  texto: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
   
  },
  splashText: {
    position: 'absolute',
    marginBottom: 60,
    fontSize: 20,
    color: '333333',
  },
  textoContainer:{
    backgroundColor: 'black',
    padding: 20,
  },
  container: {
    flex: 1, // Ocupa toda la pantalla
    backgroundColor: '#555555ff', // Color de fondo gris oscuro
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
  },
  titulo: {
    fontSize: 32, // Tamaño de fuente grande para el título
    color: 'white', // Color blanco para el título
    fontWeight: 'bold', // Negrita para el título
    marginBottom: 20, // Espacio debajo del título
  },
  etiquetas: {
    fontSize: 12, // Tamaño de fuente más grande para las etiquetas
    color: '#ffffffe0', // Color blanco para las etiquetas
    justifyContent: 'center',
    marginBottom: 10, // Espacio debajo de cada etiqueta
   
  },
  input: {
    width: '100%', // Ajusta el ancho según sea necesario
    color: '#ffffffc9',
    borderWidth: 2, // Grosor del borde
    borderColor: '#ffffff81', // Color del borde
    borderRadius: 8, // Bordes redondeados
    padding: 10, // Espaciado interno
    marginBottom: 10, // Espaciado inferior
    backgroundColor: '#afafaf33', // Color de fondo
  },
  registroContainer: {
    backgroundColor: '#00000065',
    padding: 30,
    borderRadius: 10,
  },
  cajaTerminos: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
})
