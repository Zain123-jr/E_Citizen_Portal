import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/Colors';

const ViewComplaints = ({navigation}) => {
    return (
        <SafeAreaView style={styles.maincontainer} >
            <ScrollView>
                <View style={styles.head} >
                    <TouchableOpacity onPress={() => navigation.navigate('CitizenHome')} >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.heading} >View Complaints</Text>
                </View>

                <View style={{flex:1}} >
                    <Text style={{color:'#000', textAlign:'center', fontSize:30, marginTop:200}} >This is View Complaints Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewComplaints;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    icon: {
        top: 20,
    },

    head: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 15,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    heading: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        top: -18
    }
})



