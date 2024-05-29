import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground ,TextInput,Image,TouchableOpacity} from 'react-native'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const FeedBack = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [text, setText] = useState('');
  const [imageColors, setImageColors] = useState([false, false, false, false, false]);

  const handlePress = (index) => {
    setImageColors(prevColors =>
      prevColors.map((color, i) => (i === index ? !color : color))
    );
  };

  // API Call
  const FeedBackHandler = () => {}
  return (
    <View style={styles.container}>
      <Navbar/>
      <ImageBackground 
        source={require('../../../assets/images/feedbackbg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        >
          <Text style={styles.businessText}>feedback</Text>
          <Text style={styles.feedback} >Feedback us for more better Experience.</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              name='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              name='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <TextInput
              style={styles.textArea}
              placeholder="Your Message Here..."
              name='email'
              multiline={true}
              numberOfLines={10}
              onChangeText={(newText) => setText(newText)}
              value={text}
            />
          </View>
          <View style={styles.feedbacklogo} >
            {imageColors.map((isYellow, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(index)}>
              <Image
                source={require('../../../assets/images/feedbacklogo.png')}
                style={{ tintColor: isYellow ? 'yellow' : 'white' }}
              />
            </TouchableOpacity>
           ))}
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={()=>FeedBackHandler()} >
            <Text style={styles.submitText} >Submit</Text>
          </TouchableOpacity>
        </ImageBackground>
        <FooterNavbar/>
    </View>
  )
}

export default FeedBack
      

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#FFFFFF',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'start',
        alignItems: 'center',
    },
    businessText:{
      marginTop:20,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:24, 
      textTransform:'uppercase',
      color:'#FFFFFF',
      fontWeight:'700'
  },
  feedback:{
    color:'#CFCFCF',
    fontSize:12, 
    marginTop:10
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderColor: '#5F5F5F',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop:10
  },
  textArea: {
    padding: 10,
    backgroundColor: '#FFF',
    textAlignVertical: 'top',
    width: '100%',
    marginTop:10,
    borderRadius:10
  },
  feedbacklogo:{
    flexDirection:'row',
    marginTop:30,
  },
  submitBtn:{
    width:'50%',
    backgroundColor:'#F3C147',
    paddingHorizontal:32,
    paddingVertical:9,
    borderRadius:46,
    marginTop:20
  },
  submitText:{
    color:'#000000',
    fontSize:14,
    fontWeight:'500',
    textAlign:'center'
  }
})

        
     
          