import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Navbar from '../navbar/Navbar';
import FooterNavbar from '../footerNavbar/FooterNavbar';

const Mortgage = (props) => {
    const items = [
        'New purchase',
        'Final payment',
        'Buyout for Mortgage loan',
        'Refinance your property with equity cash',
        'Plot and land purchase',
        'Under construction residential properties',
        'Mortgage against Rental income',
        'Commercial properties'
    ];

    const itemMortgage = [
        'Competitive rates starting from 3.99%',
        'Fixed bank margin as low as 1.5%',
        'Mortgage solutions for all kinds of properties',
        'Guaranteed lowest interest rates',
        'Free no obligation eligibility assessment',
        'If you have a long-term loan and you own a property we can provide you with a mortgage loan and equity cash if you need',
        'Tailor-made solutions to suit your specific requirement',
        'Rates are getting high and you need help to reduce your Instalments, call our experts to get you the right solution',
        'Are you looking to expand your business? Let us help you fulfil your financial need for your business growth by getting you a loan against property or refinancing your property.'
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Navbar/>
            <ImageBackground
                source={require('../../../assets/images/businessimage.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.businessText}>Mortgage</Text>
                    <View style={styles.businessFinanceDetail}>
                        <Text style={styles.BusinessGeneralText}>
                            We offer a range of mortgage
                        </Text>
                        {items.map((item, index) => (
                            <Text key={index} style={styles.itemText}>{item}</Text>
                        ))}
                    </View>

                    <View style={styles.MortgageDetail}>
                        <Text style={styles.BusinessGeneralText}>
                            Mortgage with Extra Benefits 
                        </Text>
                        {itemMortgage.map((item, index) => (
                            <Text key={index} style={styles.itemText}>{item}</Text>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.applybtn} onPress={()=>props.navigation.navigate('MortgageLoanFoam')} >
                        <Text style={styles.applytext}>APPLY</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
            <FooterNavbar/>
        </SafeAreaView>
    );
}

export default Mortgage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    businessText: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    businessFinanceDetail: {
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: 'flex-start',
    },
    MortgageDetail:{
        paddingHorizontal: 60,
        alignItems: 'flex-start',
    },
    BusinessGeneralText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemText: {
        color: '#FFF',
        fontSize: 14,
        paddingHorizontal: 15,
    },
    applybtn: {
        backgroundColor:'#D9D9D9',
        width:'40%',
        height:40,
        borderRadius:20,
        marginTop:15,
        justifyContent:'center',
        marginTop:40,
        marginBottom:30
    },
    applytext: {
        fontSize: 15,
        fontWeight: '700',
        textAlign:'center'
    }
});
