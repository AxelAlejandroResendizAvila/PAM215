import { Text, StyleSheet, View, FlatList, SectionList,ScrollView } from 'react-native'
import React, { useState } from 'react'


export default function ListasScreen() {

  const datos = [
    { id: '1', nombre: 'Manzana' },
    { id: '2', nombre: 'Platano' },
    { id: '3', nombre: 'Naranja' },
    { id: '4', nombre: 'Uva' },
    { id: '5', nombre: 'Fresa' },
    { id: '6', nombre: 'Sandía' },
  ]

  const secciones = [
    {
      titulo: 'Frutas',
      data: [
        {nombre: 'Manzana'},
        {nombre: 'Platano'},
        {nombre: 'Naranja'},
        {nombre: 'Uva'},
        {nombre: 'Fresa'},
        {nombre: 'Sandía'},
      ]
    },
    {
      titulo: 'Verduras',
      data: [
        {nombre: 'Zanahoria'},
        {nombre: 'Lechuga'},
        {nombre: 'Tomate'},
        {nombre: 'Brocoli'},
      ]
    }
  ]

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.Titulo}>Ejemplo de FlatList</Text>
          <FlatList
            data={datos}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => (
              <View style={styles.elementos}>
                <Text style={styles.text}>{item.nombre}</Text>
              </View>
            )}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.separador}/>}
          />
          <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>

          <SectionList
            sections={secciones}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.itemSection}>
                <Text style={styles.textItem}>{item.nombre}</Text>
              </View>
            )}
            renderSectionHeader={({section: {titulo}}) => (
              <View style={styles.encabezado}>
                <Text style={styles.tituloSection}>{titulo}</Text>
              </View>
            )}
            scrollEnabled={false}
            stickySectionHeadersEnabled={false}
          />
        </View>

      </ScrollView>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72B461ff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#2b87e2ff',
  },
  Titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
    color: '#e25822ff',
  },
  elementos: {
    width: '100%',
    height: 80,
    backgroundColor: '#e12847ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: '#ffffff',
    fontWeight: '900',
    textDecorationLine: 'Underline',
  },
  separador: {
    height: 10,
  },
  encabezado: {
    backgroundColor: '#88c4d3ff',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloSection: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  itemSection: {
    backgroundColor: '#ffd700',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textItem: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Times New Roman',
  },

})
