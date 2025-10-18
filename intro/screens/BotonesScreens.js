import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React, { useState } from 'react';


export default function BotonesScreen() {
    const [esEncendido, cambiarEncendido] = useState(false);
    const [color, cambiarColor] = useState('yellow');

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>

        {/* Operador Ternario 
        {condicional ? valorTrue : valorFalse}
        */}
        <Text style={[styles.luz, {color: esEncendido ? color : 'black'}]}>
          {esEncendido ? 'Luz encendida' : 'Luz apagada'}
        </Text>

        <Switch
          value={esEncendido}
          onValueChange={ () => cambiarEncendido(!esEncendido) }
          trackColor={{true: 'green', false: 'gray'}}
        ></Switch>

        <View style={styles.cajaBotones}>
          <Button
            title= 'amarillo'
            onPress={()=> esEncendido && cambiarColor('yellow')} 
            color={'#cab900ff'}
          />
          <Button
            title= 'Azul'
            onPress={()=> esEncendido && cambiarColor('blue')} 
            color={'blue'}
          />
          <Button
            title= 'Rojo'
            onPress={()=> esEncendido && cambiarColor('red')} 
            color={'red'}
          />
        </View>

        
        
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  titulo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  luz: {
    fontSize: 30,
    marginBottom: 15,
  }
});
