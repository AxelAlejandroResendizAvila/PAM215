import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'

export default function TextosScreen() {
    const[nombre,setNombre] = useState('');
    const[password,setPassword] = useState('');
    const[telefono,setTelefono] = useState('');

    const mostrarAlerta = () => {
      if (nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
        Alert.alert("Error, favor de llenar todos los campos (Móvil)");
        alert("Favor de llenar todos los campos (Web)");
      }
      else {
          //Alert para móvil
        Alert.alert(`Datos ingresados`,`Nombre: ${nombre}\nPassword: ${password}\nTeléfono: ${telefono}`
        );
        //Alert para web
        alert(`Datos ingresados\n
          Nombre: ${nombre}\n
          Password: ${password}\n
          Teléfono: ${telefono}`
        );
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput
style={styles.input}
          placeholder='Escribe tu nombre aquí'
          value={nombre}
          onChangeText={setNombre}
        />
         <Text style={styles.etiquetas}>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu password aquí'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}

        /> 
        <Text style={styles.etiquetas}>Telefono: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu telefono aquí'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={setTelefono}
        />

        <Button
          title='Mostrar Alerta'
          onPress={mostrarAlerta}
        />
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    backgroundColor: '#555555ff', // Color de fondo gris oscuro
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
  },
  titulo: {
    fontFamily: 'Times New Roman', // Fuente Times New Roman
    fontSize: 32, // Tamaño de fuente grande para el título
    color: 'white', // Color blanco para el título
    fontWeight: 'bold', // Negrita para el título
    textDecorationLine: 'underline', // Subrayado para el título
    marginBottom: 20, // Espacio debajo del título
  },
  etiquetas: {
    fontSize: 20, // Tamaño de fuente más grande para las etiquetas
    color: 'white', // Color blanco para las etiquetas
    marginBottom: 5, // Espacio debajo de cada etiqueta
    marginTop: 10, // Espacio encima de cada etiqueta
  },
  input: {
    width: '50%', // Ajusta el ancho según sea necesario
    borderWidth: 2, // Grosor del borde
    borderColor: 'white', // Color del borde
    borderRadius: 8, // Bordes redondeados
    padding: 10, // Espaciado interno
    marginBottom: 10, // Espaciado inferior
    backgroundColor: 'gray', // Color de fondo
  }
})
