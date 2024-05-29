import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.contactUsText}>Contact Us</Text>
        <Text style={styles.remarks}>Any question or remarks? Feel free to write us a message.</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <Pressable style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
          <Text style={styles.companyContact}>Company Contact</Text>
          <View style={styles.contactInfo}>
            <View style={styles.helplineText}>
              <Image source={require('../../../assets/images/helpline.png')} />
              <View style={styles.helpNumberView}>
                <Text style={styles.helpText}>Helpline Number</Text>
                <Text style={styles.helpNumber}>800-664000</Text>
              </View>
            </View>
            <View style={styles.helplineText}>
              <Image source={require('../../../assets/images/email.png')} />
              <View style={styles.helpNumberView}>
                <Text style={styles.helpText}>Email</Text>
                <Text style={styles.helpEmail}>info@jovera.ae</Text>
              </View>
            </View>
          </View>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.locationView}>
            <Image source={require('../../../assets/images/location.png')} />
            <View style={styles.locationBuilding}>
              <View style={styles.locationOne}>
                <Text>Location 1: </Text>
                <Text>to view on map <Text> Click Here</Text> </Text>
              </View>
              <Text style={styles.locationAddress}>8th Floor, Al Jazira Club Tower A, Al Muroor St, Abu Dhabi, UAE</Text>
            </View>
          </View>
          <View style={styles.locationView}>
            <Image source={require('../../../assets/images/location.png')} />
            <View style={styles.locationBuilding}>
              <View style={styles.locationOne}>
                <Text>Location 2: </Text>
                <Text>to view on map <Text> Click Here</Text> </Text>
              </View>
              <Text style={styles.locationAddress}>MM2 - Al Faisal Building, Hafiz Ibrahim Street, Nuaimeya 1 Ajman</Text>
            </View>
          </View>
          <View style={styles.locationView}>
            <Image source={require('../../../assets/images/location.png')} />
            <View style={styles.locationBuilding}>
              <View style={styles.locationOne}>
                <Text>Location 3: </Text>
                <Text>to view on map <Text> Click Here</Text> </Text>
              </View>
              <Text style={styles.locationAddress}>8th Floor, Al Jazira Club Tower A, Al Muroor St, Abu Dhabi, UAE</Text>
            </View>
          </View>
          <View style={styles.socialContact}>
            <Pressable>
              <Image source={require('../../../assets/images/LinkedIn.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../../../assets/images/YouTube.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../../../assets/images/Facebook.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../../../assets/images/Instagrams.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../../../assets/images/WhatsApp.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../../../assets/images/Tiktoks.png')} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
        <FooterNavbar/>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  contactUsText: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
  },
  remarks: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
    marginTop: 5,
    textAlign: 'center',
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
    borderColor: '#8B8B8B',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#F3C147',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 46,
    marginTop: 20,
  },
  submitText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  companyContact: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helplineText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '500',
  },
  helpNumber: {
    fontSize: 18,
    fontWeight: '300',
  },
  helpEmail: {
    fontSize: 18,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  helpNumberView: {
    marginLeft: 5,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
  },
  locationOne: {
    flexDirection: 'row',
  },
  locationAddress: {
    fontSize: 10,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  locationBuilding: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  socialContact: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
})
