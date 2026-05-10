import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Password() {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>

<       View style={styles.voltar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={styles.seta} 
                name="arrow-back" size={28} color="black"/>
            </TouchableOpacity>
     </View>

            <View style={styles.middleContainer}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/senha.jpg')}
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.topContainer}>
                <Text style={styles.upperText}>Por favor, indique o seu endereço de Email</Text>
                <TextInput
                    placeholder='Digite seu email...'
                    style={styles.input}
                />
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    seta:{
        margin: 25,
        bottom: -15,
        zIndex: 6,
      },
    upperText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 20, // Espaçamento na parte superior
        color: 'white',
        fontWeight: 'bold',
        color: '#000000',  
    },
    middleContainer: {

        height:80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#d3d3d3',
        borderRadius: 20,
        paddingLeft: 15,
        alignSelf: 'center',
        margin: 10,
        bottom: -50,
      },
    button: {
        position: 'absolute',
        backgroundColor: '#4a3093',
        borderRadius: 55,
        paddingVertical: 12,
        width: '90%',
        alignItems: 'center',
        bottom: 70, 

    },
    buttonText: {
        fontSize: 18,
        color: '#e3daf7',
        fontWeight: 'bold',
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55, 
    },
    lowerText: {
        fontSize: 14,
        margin: 20,
        color: 'white',
    },
    button2: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginLeft: 10,
        bottom: 65,
    },
   
});