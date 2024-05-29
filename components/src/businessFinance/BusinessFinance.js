import { StyleSheet, Text, View,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const BusinessFinance = (props) => {
  return (
    <View style={styles.container}>
      <Navbar/>
        <ImageBackground 
        source={require('../../../assets/images/businessimage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        >
            <Text style={styles.businessText} >business finance</Text>
            <View style={styles.businessFinanceDetail} >
              <Text style={styles.BusinessGeneralText} >Business Finance</Text>
              <Text style={styles.BusinessGeneralText}>
                Jovera Group excels in offering strategic business finance and loan solutions that cater to your company’s unique 
                financial needs. With a deep understanding of the market dynamics, we provide expert guidance and a diverse range of loan options to help you secure the 
                funding necessary for your business expansion, operational improvements, and strategic initiatives. Our commitment lies in delivering tailored financial solutions 
                that fuel your growth and ensure long-term financial stability.
              </Text>
            </View>

            <TouchableOpacity style={styles.applybtn} onPress={()=>props.navigation.navigate('BusinessFinanceFoam')}>
                <Text style={styles.applytext} >Apply</Text>
            </TouchableOpacity>

        </ImageBackground>
        <FooterNavbar/>
    </View>
  )
}

export default BusinessFinance

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
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:24, 
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    businessFinanceDetail:{
        paddingHorizontal:90,
        paddingTop:20
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
      }
})
