
//1. imports: Zona de importaciones
import { StyleSheet, View, Text, Button } from "react-native";
import React, {useState} from "react";
import { StatusBar } from "react-native-web";

//2. Main: Zona de componentes
export default function App() {
  //Variable y una función
  const[contador, setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador:</Text>
      <Text style={styles.text2}>{contador}</Text>
      
      <View style={styles.buttonContainer}>
        <Button color = "#54ea51ff" title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
        <Button color = "#e8ea51ff" title='Quitar' onPress={()=>setContador(contador-1)}></Button>
        <Button color = "#ea5151ff" title='Reiniciar' onPress={()=>setContador(0)}></Button>
      </View>
  
      <StatusBar style="auto" />

    </View>

  );
}

//3. Styles: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#737373ff", 
    alignItems: "center", //Alineación horizontal
    justifyContent: "center", //Alineación vertical
  },
  text: {
    fontFamily: "monospace", 
    fontSize: 40, //Tamaño de la letra
    color: "#ffffffff",
    fontWeight: "bold", //Negrita
    fontStyle: "italic", //Cursiva
    textDecorationLine: "line-through", //tachado
  },
  text2: {
    fontFamily: "courier",
    fontSize: 80, //Tamaño de la letra
    color: "#51d0eaff",
    fontWeight: "bold", //Negrita
    fontStyle: "italic", //Cursiva
    textDecorationLine: "underline", //Subrayado
  },
  buttonContainer: {
    marginTop: 20, //Margen superior
    flexDirection: "row", //Alineación horizontal
    justifyContent: "space-between", //Separación entre botones
    width: "80%",
  },
});
