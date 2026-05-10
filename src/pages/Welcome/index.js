import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.upperText}>Vamos Começar!</Text>
            </View>
            <View style={styles.middleContainer}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/mental.jpg')}
                    style={{ width: 300, height: 300, alignSelf: 'center' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>

                    <TouchableOpacity
                     style={styles.button2}
                     onPress={ () => navigation.navigate('Login')}
                     >
                        <Text style={styles.buttonText2}>Já possui uma conta? Acessar</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c92e6',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    upperText: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20, // Espaçamento na parte superior
        color: 'white',
        fontWeight: 'bold',  
    },
    middleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#4a3093',
        borderRadius: 55,
        paddingVertical: 12,
        width: '90%',
        alignItems: 'center',
        bottom: 120,
    },
    buttonText: {
        fontSize: 18,
        color: '#e3daf7',
        fontWeight: 'bold',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
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
    buttonText2: {
        fontSize: 14,
        color: '#e3daf7',
        fontWeight: 'bold',
    }
});
