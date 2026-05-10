import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
 const navigation = useNavigation();
 const [hidePassword, setHidePassword] = React.useState(true);
 const [hideConfirmPassword, setHideConfirmPassword] = React.useState(true);

 return (
 <View style={styles.container}>
    <View style={styles.voltar}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
         <Ionicons style={styles.seta} 
         name="arrow-back" size={28} color="black"/>
       </TouchableOpacity>
     </View>
   <View style={styles.teste}>
     <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
       <Text style={styles.message}>Bem vindo(a) de volta!</Text>
     </Animatable.View>
   </View>
   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
     <View style={styles.teste2}>
       <Text style={styles.aaa}>Faça login com sua rede social</Text>
     </View>
     <View style={styles.botoes}>
       {/* Novo botão com imagem */}
       <TouchableOpacity style={styles.imageButton}>
         <Image
           source={require('../../assets/Google.jpg')}
           style={styles.buttonImage}
         />
       </TouchableOpacity>

       <TouchableOpacity style={styles.imageButton}>
         <Image
           source={require('../../assets/facebook.jpg')}
           style={styles.buttonImage}
         />
       </TouchableOpacity>
     </View>
     <View style={styles.sebarra}>
       <View style={styles.barra}/>
         <Text style={styles.txtSeparar}>Ou faça login</Text>
       <View style={styles.barra2}/>
     </View>
     <View style={styles.espacamento}>
       <TextInput 
         placeholder="Email"
         style={styles.input}
       />
       <View style={styles.inputContainer}>
         <TextInput
           placeholder="Senha"
           secureTextEntry={hidePassword}
           style={styles.input}
         />
         <TouchableOpacity
         style={styles.eye}
         onPress={() => setHidePassword(!hidePassword)}>
           <Ionicons name={hidePassword ? "eye-off" : "eye"} size={24} color="black" />
         </TouchableOpacity>
       </View>
     </View>

     <TouchableOpacity 
     style={styles.esqueceu}
     onPress={ () => navigation.navigate('Password')}
     >
      <Text style={styles.textEsqueceu}>Esqueceu sua senha?</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Continuar</Text>
     </TouchableOpacity>

     <TouchableOpacity 
     style={styles.buttonAcessar}
     onPress={ () => navigation.navigate('SignIn')}
     >
       <Text style={styles.acessarText}>Não possui uma conta? Acesse</Text>
     </TouchableOpacity>
     
   </Animatable.View>
 </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: '#FFF'
  },
  voltar:{
    backgroundColor:'#8c92e6',
  },
  seta:{
    margin: 25,
    bottom: -15,
    zIndex: 6,
  },
  teste: {
    backgroundColor: '#8c92e6',
    borderBottomLeftRadius: 60
  },
  containerHeader: {
    marginTop: '25%',
    marginBottom: '-10%',
    paddingStart: '5%',
  },
  espacamento: {
    justifyContent: "space-between",
    top: -65,
  },
  sebarra: {
    left: -23,
    position: 'fixed',
    alignItems: "center",
    flexDirection: "row",
    bottom: 100,
  },
  barra:{
    alignSelf: "center",
    right: 10,
    height: 1,
    width: 150,
    backgroundColor:'#d3d3d3'
  },
  barra2:{
    alignSelf: "center",
    left: 10,
    height: 1,
    width: 150,
    backgroundColor:'#d3d3d3'
  },
  txtSeparar: {
    alignSelf: "center",
   fontSize: 12
  },
  botoes: {
    flexDirection: 'row',
    display: 'flex',
    margin: 90,
    bottom: 50,
    justifyContent: 'space-around'
  },
  message: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    bottom:90,
    zIndex:5,
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    bottom: -10,
    paddingStart: '6%',
    paddingEnd: '6%',
    zIndex: 1
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  aaa:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    paddingLeft: 15,
    alignSelf: 'center',
    margin: 10,
  },
  esqueceu:{
    bottom: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEsqueceu:{
    color: '#D3D3D3',
  },
  button: {
    borderColor: '#4a3093',
    borderWidth: 2,
    width: '100%',
    borderRadius: 24,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:50,
  },
  buttonText: {
    color: '#4a3093',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonAcessar: {
    marginTop: 14,
    alignSelf: 'center',
    bottom: 45,
  },
  acessarText: {
    color: '#e3daf7',
  },
  imageButton: {
    marginTop: 14,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonImage: {
    width: 48, 
    height: 48, 
    
  },
  inputContainer: {
    flexDirection: 'row',
    left: -10,
    alignItems: 'center',
    alignContent: 'center',
  },
  eye:{
    zIndex: 1,
    left: -50,
  },
  
});
