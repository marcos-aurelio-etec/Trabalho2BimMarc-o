import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import Sobre from './sobre';

export default function App() {
const [page, setPage] = React.useState('home');

const renderPage = () => {
    if (page === 'home') {
        return (
            <View style={styles.container}>
                <Text style={style.title}>pagina principal</Text>
                <Text style={style.title}>exemplo 1 </Text>
                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={style.buttonText}>Clique Aqui </Text>
                </TouchableOpacity>
            </View>
        );
} else if  (page === 'sobre') {
    return <Sobre />
}
};

return <View style={StyleSheet.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent; 'center',
        alignItems; 'center',
        backgroundColor: '#FFF',
    },

    title: {
        
    }
})