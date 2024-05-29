import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const MianScreen = () => {
  return (
    <View style={styles.container} >
        <Navbar/>
      <ImageBackground
           source={require('../../../assets/images/mainbg.png')}
           style={styles.backgroundImage}
           resizeMode="cover"
      >
        
      </ImageBackground>
      <FooterNavbar/>
    </View>
  )
}

export default MianScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'start',
        alignItems: 'center',
    }
})