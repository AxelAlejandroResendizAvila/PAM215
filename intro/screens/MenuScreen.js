
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreens';
import TextosScreen from './TextosScreens';
import FondosScreen from './FondosScreens';
import ScrollScreen from './ScrollScreens';
import IndicadorScreen from './IndicadorScreens';
import ListasScreen from './ListasScreens';
import ModalScreen from './ModalScreens';
import BottomScreen from './BottomScreens';
import RegistroScreen from './RegistroScreens';

export default function MenuScreen() {
    const[screen, setScreen] = useState('menu');

    switch(screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotonesScreen />;
        case 'textos':
            return <TextosScreen />;
        case 'fondos':
            return <FondosScreen />;
        case 'scroll':
            return <ScrollScreen />;
        case 'indicador':
            return <IndicadorScreen />;
        case 'listas':
            return <ListasScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'bottom':
            return <BottomScreen />;
        case 'registro':
            return <RegistroScreen />;
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.Text}>Menu de practicas</Text>
                        <View style={styles.buttonContainer}>
                            <Button color="#150d84ff" onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('botones')} title='Pract: Botones'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('textos')} title='Pract: Textos'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('fondos')} title='Pract: Fondos'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('scroll')} title='Pract: Scroll'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('indicador')} title='Pract: Indicador'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('listas')} title='Pract: Listas'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('modal')} title='Pract: Modal'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('bottom')} title='Pract: Bottom'/>
                            <Button color="#150d84ff" onPress={()=>setScreen('registro')} title='Pract: Registro'/>
                        </View>
                    </View>
                )
    }
}

const styles = StyleSheet.create({
    Text: {
        fontFamily: "monospace", 
        fontSize: 40, //Tamaño de la letra
        color: "#ffffffff",
        textAlign: 'center',
        
    },
    container: {
        flex: 1,
        backgroundColor: '#737373ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20, //Margen superior
        flexDirection: "column", //Alineación vertical
        justifyContent: "space-between", //Separación entre botones
        width: "80%",
        gap: 30,
    },
})