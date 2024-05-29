import { StyleSheet, Text, View,ImageBackground, Pressable,ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const WebDev = () => {
  return (
    <View style={styles.container}>
        <Navbar/>
        <ImageBackground 
        source={require('../../../assets/images/businessimage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.businessText} >WEB/SOFTWARE DEVELOPMENT</Text>
            <View style={styles.businessFinanceDetail} >
                <Text style={styles.BusinessGeneralText}>
                  At our advertising agency, we understand the importance of a strong online presence, which is why we offer cutting-edge web and software development services.
                  Our team of skilled developers specializes in creating custom solutions tailored to your specific needs and goals. From sleek and responsive websites to robust 
                  e-commerce platforms and intuitive mobile applications, we have the expertise to bring your vision to life.
                </Text>


                <Text style={styles.BusinessGeneralText}>
                Using the latest technologies and best practices, we ensure that your digital assets are not only visually stunning but also highly functional and user-friendly. 
                Whether you're a startup looking to establish your online presence or an established business seeking to innovate and streamline your operations, we're here to help.
                </Text>

                <Text style={styles.BusinessGeneralText}>
                    With a focus on scalability, security, and performance, we deliver solutions that grow with your business and exceed industry standards. 
                    Let us be your partner in digital transformation – contact us today to discuss how we can elevate your online presence and drive success.
                </Text>
            </View>

            <Pressable style={styles.applybtn} >
                <Text style={styles.applytext} >Learn More</Text>
            </Pressable>
        </ScrollView>
        </ImageBackground>
        <FooterNavbar/>
    </View>
  )
}

export default WebDev

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
        fontWeight:'700',
        paddingHorizontal:80,
    },
    businessFinanceDetail:{
        paddingHorizontal:70,
        paddingTop:10,
        justifyContent:'center', alignItems:'center'
    },
    BusinessGeneralText:{
        color:'#FFFFFF',
        fontWeight:'700', 
        fontSize:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applybtn: {
      backgroundColor:'#D9D9D9',
      width:'40%',
      height:40,
      borderRadius:20,
      marginTop:15,
      justifyContent:'center',
      marginTop:70,
      },
      applybtnText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
        
      },
      applytext:{
        fontSize:15, 
        fontWeight:'700',
        textAlign:'center'
      },
      scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
      },

})