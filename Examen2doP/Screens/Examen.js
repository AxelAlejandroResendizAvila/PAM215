import { Text, StyleSheet, View, ImageBackground, Animated, Easing, Button, TextInput, Alert , Switch, ScrollView, TouchableOpacity} from 'react-native'
import React,{ useEffect, useState } from 'react';

export default function ExamenScreen() {
    const[cargando,setCargando]= useState(true);
    const desvanecido = new Animated.Value(1);

    const [esEncendido1, cambiarEncendido1] = useState(false);
    const [esEncendido2, cambiarEncendido2] = useState(false);
    const [esEncendido3, cambiarEncendido3] = useState(false);
    const [esEncendido4, cambiarEncendido4] = useState(false);
    const [esEncendido5, cambiarEncendido5] = useState(false);
    const [esEncendido6, cambiarEncendido6] = useState(false);

    const ReiniciarEstatus = () => {
      cambiarEncendido1(false);
      cambiarEncendido2(false);
      cambiarEncendido3(false);
      cambiarEncendido4(false);
      cambiarEncendido5(false);
      cambiarEncendido6(false);
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
                      <Text style={styles.descripcion}> Terminar el proyecto que tuve en la oficina</Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido1 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido1}
                          onValueChange={cambiarEncendido1}
                        />
                        </View>
                        <Text style={styles.prioridadMedia}> Prioridad: Media </Text>
                      </View>
                    </View>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 2: </Text>
                      <Text style={styles.descripcion}> Adelantar a mis labores de programación.</Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido2 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido2}
                          onValueChange={cambiarEncendido2}
                        />
                        </View>
                        <Text style={styles.prioridadAlta}> Prioridad: Alta </Text>
                      </View>
                    </View>
                    
                </View>
                <View style={styles.categoria2}>
                    <Text style={styles.tituloCategoria}>Personal </Text>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 1: </Text>
                      <Text style={styles.descripcion}> Tender mi cama y lavarme los dientes.</Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido3 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido3}
                          onValueChange={cambiarEncendido3}
                        />
                        </View>
                        <Text style={styles.prioridadBaja}> Prioridad: Baja </Text>
                      </View>
                    </View>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 2: </Text>
                      <Text style={styles.descripcion}> Hacer ejercicio en la noche.</Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido4 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido4}
                          onValueChange={cambiarEncendido4}
                        />
                        </View>
                        <Text style={styles.prioridadMedia}> Prioridad: Media </Text>
                      </View>
                    </View>
                </View>
                <View style={styles.categoria3}>
                    <Text style={styles.tituloCategoria}>Estudios </Text>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 1: </Text>
                      <Text style={styles.descripcion}> Terminar el proyecto de React Native para la aplicación móvil. </Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido5 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido5}
                          onValueChange={cambiarEncendido5}
                        />
                        </View>
                        <Text style={styles.prioridadMedia}> Prioridad: Media </Text>
                      </View>
                    </View>
                    <View style={styles.objetivo}>
                      <Text style={styles.tituloCategoria}> Objetivo 2: </Text>
                      <Text style={styles.descripcion}> Hacer el reporte diario de mis avances.</Text>
                      <View style={styles.prioridadContainer}>
                  
                        <View style={styles.estatusContainer}>
                          <Text style={styles.estatusTexto}>{esEncendido6 ? 'Completada' : 'Pendiente'}</Text>
                        <Switch
                          value={esEncendido6}
                          onValueChange={cambiarEncendido6}
                        />
                        </View>
                        <Text style={styles.prioridadBaja}> Prioridad: Baja </Text>
                      </View>
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity style={styles.reiniciarTodosEstatus}
              onPress={()=>{
                ReiniciarEstatus();
              }}>
              <Text style={styles.reiniciarTexto}>Reiniciar Todos los Estatus</Text>
            </TouchableOpacity>
          </View>

          
          
        </View>
      </ImageBackground>
    )

}

const styles = StyleSheet.create({
  reiniciarTodosEstatus:{
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000065',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reiniciarTexto:{
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },

      estatusContainer:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      estatusTexto:{
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 5,

      },
    objetivo:{
      width: '100%',
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
    prioridadContainer:{
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    prioridadAlta:{
      color: 'red',
      fontSize: 12,
      fontWeight: 'bold',
    },
    prioridadMedia:{
      color: 'orange',
      fontSize: 12,
      fontWeight: 'bold',
    },
    prioridadBaja:{
      color: 'green',
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
        height: 400,
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