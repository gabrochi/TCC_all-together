import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Keyboard} from "react-native";
import * as Animatable from 'react-native-animatable'
import { Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {CheckBox} from 'react-native-elements'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import *as yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const schema = yup.object({
  email: yup.string().email("Digite um email valido").required("Informe seu email"),
  senha: yup.string().min(8, "A senha deve ter pelo menos 8 digitos").required("Infome sua senha"),
  repitaSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais')
})

export default function SignIn() {
 const navigation = useNavigation();
 const [hidePassword, setHidePassword] = useState(true);
 const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
 const [isSelected, setSelected] = useState(false)
 
 const { control, handleSubmit, formState: { errors } } = useForm({

  resolver: yupResolver(schema)

 })




 function handleSignIn(data){
  console.log (data);
 }


 return (
  <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  enabled
 >
 <View style={styles.container}>
    <View style={styles.voltar}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
         <Ionicons style={styles.seta} 
         name="arrow-back" size={28} color="black"/>
       </TouchableOpacity>
     </View>
   <View style={styles.teste}>
     <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
       <Text style={styles.message}>Crie sua conta!</Text>
     </Animatable.View>
   </View>
   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
     <View style={styles.teste2}>
       <Text style={styles.aaa}>Faça login com sua rede social</Text>
     </View>
     <View style={styles.botoes}>
       {/* Novo botão com imagem */}
       <TouchableOpacity 
       style={styles.imageButton}
       >
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
         <Text style={styles.txtSeparar}>Ou crie sua conta</Text>
       <View style={styles.barra2}/>
     </View>

     <View style={styles.espacamento}>
     <Controller
        control={control}
        name="email"
        render={({field:{onChange, onBlur, value}}) => (
          <TextInput 
           style={[styles.input, {
            borderWidth: errors.email && 1,
            borderColor: errors.email && '#ff375b'

           }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu email"
          />
        )}
     />
    {errors.email && <Text style={styles.labelError1}>{errors.email?.message}</Text>}

<View>
 <Controller
   control={control}
   name="senha"
   render={({field:{onChange, onBlur, value}}) => (
     <TextInput
        style={[styles.input, {
            borderWidth: errors.senha && 1,
            borderColor: errors.senha && '#ff375b'

           }]}
       onChangeText={onChange}
       onBlur={onBlur}
       value={value}
       secureTextEntry={hidePassword}
       placeholder="Digite sua senha"
     />
   )}
 />
 
 <TouchableOpacity
   style={styles.eye}
   onPress={() => setHidePassword(!hidePassword)}>
   <Ionicons name={hidePassword ? "eye-off" : "eye"} size={24} color="black" />
 </TouchableOpacity>
 <View style={styles.senha}>
 {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}
 </View>
</View>

<View style={styles.inputContainer}>
  <Controller
    control={control}
    name="repitaSenha"
    render={({ field: { onChange, onBlur, value } }) => (
      <View>
        <TextInput
          style={[styles.input2, {
            borderWidth: errors.repitaSenha && 1,
            borderColor: errors.repitaSenha && '#ff375b'

          }]}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          secureTextEntry={hideConfirmPassword}
          placeholder="Confirme a senha"
        />
        <TouchableOpacity
          style={styles.eye2}
          onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
          <Ionicons name={hideConfirmPassword ? "eye-off" : "eye"} size={24} color="black" />
        </TouchableOpacity>
         <View style={styles.senha2}>
          {errors.repitaSenha && <Text style={styles.labelError}>{errors.repitaSenha?.message}</Text>}
        </View>
      </View>
    )}
  />
 
</View>
     </View>
     <View style={styles.checked}>
     <CheckBox style={styles.check}
      title="Eu aceito os termos de uso"
      checkedIcon="check"
      uncheckedIcon="square-o"
      checkedColor="green"
      uncheckedColor="black"
      checked={isSelected}
      onPress={() => setSelected(!isSelected)}
     />
    </View> 

     <TouchableOpacity style={styles.button}onPress={handleSubmit(handleSignIn)}>
       <Text style={styles.buttonText}>Continuar</Text>
     </TouchableOpacity>

     <TouchableOpacity 
     style={styles.buttonAcessar}
     onPress={ () => navigation.navigate('Login')}
     >
       <Text style={styles.acessarText}>Já possui uma conta? Acesse</Text>
     </TouchableOpacity>
     
   </Animatable.View>
 </View>
 </KeyboardAvoidingView>
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
    marginBottom: '-20%',
    paddingStart: '5%',
  },
  espacamento: {
    justifyContent: "space-between",
    top: -65,
  }, zIndex: 1,
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
    bottom:130,
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
  input2:{
    width: 360,
    height: 50,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    paddingLeft: 15,
    alignSelf: 'center',
    margin: 10,
    bottom: 28,
  },
 
  checked:{
    bottom: 115,  
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
    bottom:119,
  },
  buttonText: {
    color: '#4a3093',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonAcessar: {
    marginTop: 14,
    alignSelf: 'center',
    bottom: 120,
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
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  eye:{
    zIndex: 1,
    left: 318,
    bottom: 50,
  },
  eye2:{
    zIndex: 2,
    left: 328,
    bottom: 75,
  },
  labelError: {
    color: "#ff375b",
    fontSize: 12,
    marginLeft: 10, // Adicionado para ajustar a posição
    marginTop: 5,  // Adicionado para ajustar a posição
    bottom: 30,
  },
  labelError1: {
    color: "#ff375b",
    fontSize: 12,
    marginLeft: 10, // Adicionado para ajustar a posição
    marginTop: 5,  // Adicionado para ajustar a posição
  },
  senha2:{
    bottom: 30,
    left: 10,
  },

  
});
