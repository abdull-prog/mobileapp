import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const FooterNavbar = () => {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuBar = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
  };
  return (
    <View>
      <View style={styles.footerContainer}>
        <Image 
          style={styles.footerBackground} 
          source={require('../../../assets/images/footerNavbar.png')} 
        />
        
        <TouchableOpacity style={styles.logoContainer} onPress={toggleMenuBar}>
          <Image 
            style={styles.footerLogo} 
            source={require('../../../assets/images/footerlogo.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoContainer}  onPress={() => navigation.navigate('Dashboard')}>
          <Image 
            style={styles.PersonLogo} 
            source={require('../../../assets/images/Person.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ServiceContainer} onPress={toggleDropdown}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/Service.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.HomeContainer}  onPress={() => navigation.navigate('HomePage')}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/Home.png')} 
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.playbuttonContainer} onPress={() => navigation.navigate('PlayScreen')}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/playbutton.png')} 
          />
        </TouchableOpacity> */}

                    {dropdownVisible && (
                        <View style={styles.dropdown}>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('BusinessFinance')} >
                                <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>business finance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('Mortgage')} >
                            <Image source={require('../../../assets/images/Mortgagedropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>Mortgage</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('PersonalLoan')}>
                            <Image source={require('../../../assets/images/Cashdropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>Personal loan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('BusinessFinance')}>
                            <Image source={require('../../../assets/images/Realestatedropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>real estate</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('Advertising')}>
                            <Image source={require('../../../assets/images/Advertisingdropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>advertisment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('TravelTours')}>
                            <Image source={require('../../../assets/images/traveldropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>travel & Tours</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>navigation.navigate('WebDev')}>
                            <Image source={require('../../../assets/images/webdropdown.png')}  style={styles.dropdownImage} />
                                <Text style={styles.dropdownText}>web/software development</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                        {menuVisible && (
                        <View style={styles.menuContainer}>
                          <TouchableOpacity onPress={toggleMenuBar} style={styles.closeButton}>
                            {/* <Text style={styles.closeButtonText}>Close</Text> */}
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('LoanCalculator')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Loan Calculator</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('AboutUs')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>About Us</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('ContactUs')} >
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Contact Us</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('TermsAndConditions')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Terms and Conditions</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('PrivacyPolicy')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Privacy Policy</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('HelpandSupport')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Help & Support</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('FeedBack')} >
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Feedback</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('Faqs')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>FAQ</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('Settings')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Settings</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('Login')}>
                          <Image source={require('../../../assets/images/businessdropdown.png')} style={styles.dropdownImage} />
                            <Text style={styles.menuItemText}>Logout</Text>
                          </TouchableOpacity>
                        </View>
                      )}
            </View>
    </View>
  )
}

export default FooterNavbar
   
const styles = StyleSheet.create({
    container: {
      flex:1,
       alignItems:'flex-end',
       backgroundColor:'white'
    },
    footerContainer:{
        width:'100%', 
        height:'100%',
        justifyContent:'center', 
        alignItems:'center',
        position:'relative',
        // marginTop:500,
        marginBottom:0,
        backgroundColor:'transparent',
        position:'relative'
    },
    
    logoContainer:{
        position:'absolute',
        right:30,
    },
    PersonLogo:{
        position:'absolute',
        right:90, 
        bottom:-18
    },
    ServiceContainer:{
        position:'absolute',
        left:100,
    },
    HomeContainer:{
        position:'absolute',
        left:20,
    },
    playbuttonContainer:{
        position:'absolute',
        left:157,
        top:295
    },
    dropdownText: {
      color: 'white',
      fontSize: 13,
      textTransform:'uppercase',
  },
  dropdownItem: {
    padding: 10,
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center'
},
dropdownImage: {
  marginRight: 10,
},
    dropdown: {
      backgroundColor: 'rgba(18, 17, 17, 0.70)',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRadius: 22,
      marginVertical: 10,
      alignItems: 'start',
      justifyContent:'start',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
      bottom: '100%',
      width: '50%',
      borderWidth: 1,
      zIndex: 1,
      position: 'absolute',
  },
  menuContainer: {
    backgroundColor: '#F3C147',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 22,
    marginVertical: 10,
    alignItems: 'start',
    justifyContent:'start',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    bottom: '100%',
    right:0,
    width: '35%',
    zIndex: 1,
    position: 'absolute',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
  },
  menuItem: {
    paddingHorizontal: 10,
    paddingVertical:5,
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center'
  },
  menuItemText: {
    fontSize: 14,
  },
})
