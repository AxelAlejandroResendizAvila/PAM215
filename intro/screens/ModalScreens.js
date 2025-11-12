import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native'

import { useState } from 'react';


export default function ModalScreen() {

  const [mostrar, setMostrar] = useState(null);

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Modal</Text>

        <Pressable style={styles.boton} onPress={() => setMostrar('login')}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={() => setMostrar('registro')}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={() => setMostrar('alerta')}>
          <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal
          animationType='slide'
          transparent={true}
          visible={mostrar === 'login'}   
          onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Inicio de Sesión</Text>
            <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su Contraseña' secureTextEntry={true} style={styles.input}/>
            
            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
              <Text style={styles.text}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        </Modal>
        
          <Modal
          animationType='slide'
          transparent={true}
          visible={mostrar === 'registro'}   
          onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Registro</Text>
            <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su Email' keyboardType={'email-address'} style={styles.input}/>
            <TextInput placeholder='Ingrese su Contraseña' secureTextEntry={true} style={styles.input}/>
            
            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
              <Text style={styles.text}>Registrarse</Text>
            </Pressable>
          </View>

        </Modal>

        <Modal
          animationType='fade'
          transparent={true}
          visible={mostrar === 'alerta'}   
          onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container3}>
            <View style={styles.containerAlerta}>
              <Text style={styles.textAlerta}>Esto es una Alerta</Text>
              <View style={styles.containerBoton}>

                <Pressable style={styles.boton1} onPress={() => setMostrar(null)}>
                  <Text style={styles.text}>Ok</Text>
                </Pressable>

                <Pressable style={styles.boton2} onPress={() => setMostrar(null)}>
                  <Text style={styles.text}>Cerrar</Text>
                </Pressable>

              </View>
            </View>
          </View>
        </Modal>

        
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1bfffff',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000058',
  },
  boton: {
    backgroundColor: '#002aff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '70%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  titulo: {
    fontSize: 25, 
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  containerAlerta: {
    width: 300,
    height: 200,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textAlerta: {
    fontSize: 20,
    color: 'black',
  },
  boton1: {
    backgroundColor: '#002aff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },
  boton2: {
    backgroundColor: '#ff0000ff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },
  containerBoton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '80%',
  },


})
