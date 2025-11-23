import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Text style={styles.title}> Detalles de Usuario </Text>
                <Text style={styles.subtitle}> Usando Navegation Stack </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
        color: 'blue',
    },
});