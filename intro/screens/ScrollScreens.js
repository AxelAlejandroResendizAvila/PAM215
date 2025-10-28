import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React,{ useState, useRef } from 'react'




export default function ScrollScreen() {
    const scrollRef = useRef();
    const irAlFinal = () => {
      scrollRef.current.scrollToEnd({animated: true});
    }



    return (
      <ScrollView
        ref={scrollRef}
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}  
      >
        <Text style={styles.titulo}>Práctica ScrollView</Text>
        <Text style={styles.titulo2}>Ejemplo desplazamiento vertical</Text>

        <View>
          <Button
            color='#25776bff'
            title='Ir al final'
            onPress={irAlFinal}
          >

           </Button>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.texto}>Elemento 1</Text>
        </View>  

        <View style={styles.elementos}>
          <Text style={styles.texto}>Elemento 2</Text>
        </View>    

        <View style={styles.elementos}>
          <Text style={styles.texto}>Elemento 3</Text>
        </View>   

        <View style={styles.elementos}>
          <Text style={styles.texto}>Elemento 4</Text>
        </View> 

        <View style={styles.elementos}>
          <Text style={styles.texto}>Elemento 5</Text>
        </View>  

        <Text style={styles.titulo2}>Ejemplo desplazamiento horizontal</Text>
        <ScrollView
          horizontal={true}
          nestedScrollEnabled={true}
          style={styles.scrollhorizontal}
          showsHorizontalScrollIndicator={true}
        >
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 1</Text>
          </View>
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 2</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 3</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 4</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 5</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 6</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 7</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 8</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 9</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 10</Text>
          </View> 
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 11</Text>
          </View>  
          <View style={styles.elementos2}>
            <Text style={styles.texto}>cuadro 12</Text>
          </View>   
        </ScrollView>


      </ScrollView>
    )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7cf3e7ff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  titulo2: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  elementos: {
    width: '100%',
    height: 100,
    backgroundColor: '#25776bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,

  },
  elementos2: {
    width: 120,
    height: 120,
    backgroundColor: '#25776bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 26,
    fontFamily: 'Courier',
    color: '#57e7c6fff',
    textAlign: 'center',
  },
  scrollhorizontal: {
    marginVertical: 10,
    width: '100%',

  }
})
