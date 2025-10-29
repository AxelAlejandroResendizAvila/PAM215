import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

export default function IndicadorScreen() {
  const[ loading, setLoading ] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  if(loading) {
    return(
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size='large'
            color='#ff3434ff'
            animating={true}
            hidesWhenStopped={true}
          />
          <Text style={styles.text}>Cargando...</Text>
        </View>
      </View>
    )
  }



    return (
      <View style={styles.container}>
        <Text style={styles.title}>ActivityIndicator</Text>
        <Button color={'red'} title='Carga de datos' onPress={startLoading}/>
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32322dff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  loaderContainer: {
    alignItems: 'center',
  }
})
