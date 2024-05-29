import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput,TouchableOpacity } from 'react-native';
import FooterNavbar from '../footerNavbar/FooterNavbar';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');

  const OtpHandler = () => {
    props.navigation.navigate('OtpVerification')
  }
  return (
    <>
    
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/loginbg.png')} />
        <TouchableOpacity style={styles.backbuttonContainer} onPress={()=>props.navigation.navigate('Login')} >
            <Image source={require('../../../assets/images/backbutton.png')} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Forgot Password?</Text>
          <Text style={styles.welcomeLoginText}>Enter your email address</Text>
        </View>
        <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Your Email' 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          keyboardType='email-address'
          name='email'
          autoCapitalize='none'
        />
    
        <TouchableOpacity style={styles.loginBtn} onPress={()=>OtpHandler()}>
            <Text style={styles.loginText} >Send code</Text>
        </TouchableOpacity>

          <View style={styles.joveraRegister}>
            <Text style={styles.newJovera} >New to JOVERA ? 
            <TouchableOpacity onPress={()=>props.navigation.navigate('Register')} >
                <Text style={styles.registerBtn}> Register Here</Text>
            </TouchableOpacity>
            </Text>
          </View>
      </View>
      </View>
    </View>
    <FooterNavbar/>
    </>
  );
}
          


export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loginImageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5, // 50% of the screen height
    flexShrink: 0,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: '65%', 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeLoginText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  textInput:{
    width:'100%',
    height:'55px',
    flexShrink: 0,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    height: 55,
    borderColor: '#8B8B8B',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:40,
    borderRadius:12,
    marginTop:15,
    justifyContent:'center',
  },
  loginText:{
    color:'#000',
    fontWeight:'500',
    fontSize: 22,
    textAlign:'center'
  },
  joveraRegister: {
    marginTop:35,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  registerBtn:{
    color:'#D5A847',
    fontWeight:'500',
    fontSize:16,
  },
  newJovera:{
    color:'#000',
    fontSize:16,
    fontWeight:'500',
  },
  backbuttonContainer:{
    position: 'absolute',
    top: '10%', 
    left: '7%',
    right: 0,
    alignItems: 'start',
  },
});
