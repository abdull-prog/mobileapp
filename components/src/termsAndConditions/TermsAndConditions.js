import { StyleSheet, Text, View,ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../navbar/Navbar'
import FooterNavbar from '../footerNavbar/FooterNavbar'

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
        <Navbar/>
            <ImageBackground 
                source={require('../../../assets/images/businessimage.png')}
                style={styles.backgroundImage}
            >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.businessText} >terms & conditions</Text>
                <View style={styles.businessFinanceDetail} >
                    <Text style={styles.BusinessGeneralText}>Jovera Service Terms:</Text>
                    <Text style={styles.BusinessGeneralText}>Services Offered: Real estate transactions, mortgage brokerage, business finance facilitation, and personal loans.</Text>
                    <Text style={styles.BusinessGeneralText}>Eligibility:Criteria include creditworthiness, financial stability, and legal requirements.</Text>
                    <Text style={styles.BusinessGeneralText}>Application Process:Details steps, required documentation, and timelines.</Text>
                    <Text style={styles.BusinessGeneralText}>Interest Rates and Fees: Specifies rates, fees, and potential changes over time.</Text>
                    <Text style={styles.BusinessGeneralText}>Loan Terms: Describes repayment schedules, penalties, and prepayment options.</Text>
                    <Text style={styles.BusinessGeneralText}>Property Transactions: Explains buying, selling, or renting processes, legal obligations, fees, and timelines.</Text>
                    <Text style={styles.BusinessGeneralText}>
                        Confidentiality and Privacy: Ensures client information confidentiality and privacy measures.
                        Legal Compliance: Assures adherence to relevant laws and regulations.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                        Dispute Resolution: Establishes procedures for resolving disputes.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                        Termination of Services: Clarifies circumstances and procedures for termination.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                        Disclaimer: States Jovera's efforts for accuracy but advises seeking professional advice.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                        Amendment Clause: Reserves the right to modify terms with proper notification.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                    Contact Information: Provides contact details for queries or complaints.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                    Governing Law: Specifies jurisdiction and governing law.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                    Severability: Clarifies the impact of invalid provisions on the agreement.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                    Waiver: States failure to enforce a provision doesn't waive the right to enforce it later.
                    </Text>
                    <Text style={styles.BusinessGeneralText}>
                    Entire Agreement: Confirms the terms as the entire agreement between Jovera and clients.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
        <FooterNavbar/>
    </View>
  )
}

export default TermsAndConditions

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
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:24, 
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    businessFinanceDetail:{
        paddingHorizontal:60,
        paddingTop:8
    },
    BusinessGeneralText:{
        color:'#FFFFFF',
        fontWeight:'700', 
        fontSize:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applybtn: {
        width: 100, 
        height: 50, 
        borderRadius: 50, 
        backgroundColor: '#D9D9D9', 
        justifyContent: 'center', 
        alignItems: 'center', marginTop:120,
      },
      applybtnText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
        
      },
      applytext:{
        fontSize:15, 
        fontWeight:'700'
      },
      scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
      },

})