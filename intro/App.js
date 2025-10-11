//1. imports: Zona de importaciones
import { StyleSheet, View, Text, Button } from "react-native";
import React, {useState} from "react";

//2. Main: Zona de componentes
export default function App() {
  //Variable y una función
  const[contador, setContador]=useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contador: {contador}</Text>
      <Button title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button title='Quitar' onPress={()=>setContador(contador-1)}></Button>
      <Button title='Reiniciar' onPress={()=>setContador(contador-contador)}></Button>
    </View>
  );
}

//3. Styles: Zona de estilos y posicionamiento
