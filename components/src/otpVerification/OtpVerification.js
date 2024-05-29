import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions,TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FooterNavbar from '../footerNavbar/FooterNavbar';

const { width, height } = Dimensions.get('window');

const OtpVerification = (props) => {
  return (

    <>
       <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backbuttonContainer} onPress={()=>props.navigation.navigate('Login')} >
          <Image source={require('../../../assets/images/backbutton.png')} />
        </TouchableOpacity>
        <View style={styles.loginImageContainer}></View>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>OTP Verification</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../../assets/images/OTPImage.png')} 
            style={styles.otpImage} 
            resizeMode="contain" 
          />
        </View>
          <Text style={styles.otpText} >Enter OTP</Text>
          <Text style={styles.digiitCode} >An 4 digit code has been sent to your email</Text>
          
          <View style={styles.textField} >
              <TextInput style={styles.textInput}/>
              <TextInput style={styles.textInput}/>
              <TextInput style={styles.textInput}/>
              <TextInput style={styles.textInput}/>
          </View>

          <TouchableOpacity style={styles.VerifyBtn} onPress={()=>props.navigation.navigate('NewPassword')} >
              <Text style={styles.VerifyText} >Verify</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ResendBtn} onPress={()=>props.navigation.navigate('Faqs')}>
              <Text style={styles.VerifyText} >Resend OTP</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
      <FooterNavbar/>
    </>

);
};

export default OtpVerification;
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: width * 0.05,
  },
  backbuttonContainer: {
    position: 'absolute',
    top: height * 0.06,
    left: width * 0.07,
    backgroundColor: '#FFFFFF',
  },
  loginImageContainer: {
    width: '100%',
    flexShrink: 0,
    marginTop: height * 0.1,
    position: 'relative',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#000',
    fontSize: width * 0.08,
    fontWeight: '700',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  otpImage: {
    width: '100%',
    height: height * 0.4,
  },
  otpText:{
    color:'#000000',
    fontSize:24,
    fontWeight:'500'
  },
  digiitCode:{
    color:'#575757',
    fontSize:16,
    fontWeight:'500'
  },
  textInput: {
    width: '22%',
    height: '100%',
    borderRadius: 14,
    fontSize: 45,
    backgroundColor:'#E3E3E3',
    borderColor:'#E3E3E3', 
    textAlign:'center', 
    fontWeight:'700',
    marginLeft:5
  },
  textField:{
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'start',
    padding: 16,
  },
  VerifyBtn: {
    backgroundColor:'#F3C147',
    width:'100%',
    height:40,
    borderRadius:12,
    marginTop:15,
    justifyContent:'center',
  },
  ResendBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:40,
    borderRadius:12,
    marginTop:15,
    justifyContent:'center',
    // marginBottom:20
  },
  VerifyText:{
    color:'#000',
    fontSize: 22,
    fontWeight:'500',
    textAlign:'center'
  }
});



