import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,Image } from 'react-native';
import Navbar from '../navbar/Navbar';
import FooterNavbar from '../footerNavbar/FooterNavbar';

const HelpandSupport = () => {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Navbar/>
      <ImageBackground
        source={require('../../../assets/images/helpandsupportbg.png')}
        style={styles.backgroundImage}
      >
        <Text style={styles.loanText}>help & Support</Text>

        <View style={styles.formContainer}>
            <Text style={styles.label}>Contact Us</Text>
        <View style={styles.customSupport} >
         
          <Image source={require('../../../assets/images/contactphone.png')} />
          <View>
            <Text style={styles.customText} >Customer Support</Text>
            <Text style={styles.customText}>800-664000</Text>
          </View>
        </View>
            <Text style={styles.typeIssue} >Type of Issue</Text>
        </View>

        <TextInput
            style={styles.textArea}
            placeholder='Describe your issue here'
            multiline={true}
            numberOfLines={10}
            onChangeText={(newText) => setText(newText)}
            value={text}
        />
      </ImageBackground>
      <FooterNavbar/>
    </View>
  );
};



export default HelpandSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'start',
    alignItems: 'center',
  },
  loanText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    paddingTop: 60,
    textTransform:'uppercase'
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    color: '#FFF',
    fontWeight:'600',
    paddingTop:20
  },
  customSupport:{
    flexDirection:'row',
    marginTop:15,
    alignItems:'start',
    borderBottomWidth: 1.5,
    borderBottomColor: '#FFFFFF',
    paddingBottom:10
  },
  customText:{
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'500',
    paddingLeft:8
  },
  typeIssue:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'500',
    marginTop:20
  },
  textArea: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
    textAlignVertical: 'top',
    width: '80%',
    marginTop:20,
    borderRadius:10
  },
});
