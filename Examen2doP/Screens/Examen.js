import { Text, StyleSheet, View, ImageBackground, Animated, Easing, Button, TextInput, Alert , Switch, ScrollView} from 'react-native'
import React,{ useEffect, useState } from 'react';

export default function ExamenScreen() {
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
          duration: 400,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(()=> setCargando(false));

      }, 1000);
      return()=> clearTimeout(timer);
    },[]);

    if(cargando) {
      return(
        <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
          <ImageBackground
            source={require('../assets/favicon.png')}
            resizeMode='contain'
            style={styles.splashImage}
          >
            <Text style={styles.splashText}> Si puedes imaginarlo, puedes hacerlo. </Text>
          </ImageBackground>
        </Animated.View>
      );
    }


    return (
      <ImageBackground
        source={require('../assets/1.png')}
        resizeMode='cover'
        style={styles.background}
      >
        
        <View style={styles.mainContainer}>
            <View style={styles.encabezado}>
            <Text style={styles.titulo}>Mis deberes</Text>
            <Text style={styles.fechaActual}>7 de noviembre del 2025</Text>
        </View>

          <View style={styles.scrollviewContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollView}
              
              
            
              >
                <View style={styles.categoria1}>
                    <Text style={styles.tituloCategoria}>Trabajo </Text>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 1: </Text>
                      <Text style={styles.descripcion}> Terminar el proyecto de React Native para la aplicación móvil. </Text>
                    </View>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 2: </Text>
                      <Text style={styles.descripcion}> Adelantar a mis labores de programación.</Text>
                    </View>
                    
                </View>
                <View style={styles.categoria2}>
                    <Text style={styles.tituloCategoria}>Personal </Text>
                </View>
                <View style={styles.categoria3}>
                    <Text style={styles.tituloCategoria}>Estudios </Text>
                </View>

            </ScrollView>
          </View>

          
          
        </View>
      </ImageBackground>
    )

}

const styles = StyleSheet.create({
    objetivo:{
      marginTop: 10,
      backgroundColor: '#ffffff65',
      padding: 10,
      borderRadius: 10,
    },
    descripcion:{
      color: 'black',
      fontSize: 12,
      fontWeight: 'bold',

    },
    
    tituloCategoria:{
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },

    categoria1:{
      marginBottom: 20,
      backgroundColor: '#ff000065',
      padding: 10, 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoria2:{
      marginBottom: 20,
      backgroundColor: '#00ff0065',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoria3:{
      marginBottom: 20,
      backgroundColor: '#0000ff65',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollviewContainer:{
      marginBottom: 20,
        height: 200,
        width: '100%',
    },
    encabezado: {
      width: '100%',
      
      padding: 20,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fechaActual: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
    },
    titulo: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
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
  mainContainer: {
    backgroundColor: '#6e6e6e65',
    padding: 20,
    borderRadius: 10,
  },
  cajaTerminos: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
})