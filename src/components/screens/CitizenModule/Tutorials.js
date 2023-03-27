import React from 'react';
import { Text, StyleSheet, View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tutorials = () => {
    const handleLinkPress = () => {
        Linking.openURL('https://youtu.be/dM4BXakoYFk');
        Linking.openURL('https://youtu.be/MMpk-TaEBuY');
        Linking.openURL('https://youtu.be/FPh_qwdpIIg');
        Linking.openURL('https://youtu.be/reLoZelbhfs');
        Linking.openURL('https://youtu.be/KKbQog8D1b0');
        Linking.openURL('https://youtu.be/KtNo4QErfWs');
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container} >
                    <View style={styles.container1} >
                        <Text style={styles.heading}>How to Register at E-Citizen Portal ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/dM4BXakoYFk</Text>
                    </View>

                    <View style={styles.container2} >
                        <Text style={styles.heading}>How to Verify Mobile Number at E-Citizen Portal ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/MMpk-TaEBuY</Text>
                    </View>

                    <View style={styles.container3} >
                        <Text style={styles.heading}>How to Reset Password of Your Account ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/FPh_qwdpIIg</Text>
                    </View>

                    <View style={styles.container4} >
                        <Text style={styles.heading}>How to Register Complaint at E-Citizen Portal ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/reLoZelbhfs</Text>
                    </View>

                    <View style={styles.container5} >
                        <Text style={styles.heading}>How to Withdraw Complaint at E-Citizen Portal ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/KKbQog8D1b0</Text>
                    </View>

                    <View style={styles.container6} >
                        <Text style={styles.heading}>How to Provide Information about E-Citizen Portal Complaints ?</Text>
                        <Text style={styles.link} onPress={handleLinkPress} >https://youtu.be/KtNo4QErfWs</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}

export default Tutorials;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },

    container1: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingBottom: 20,
    },

    container2: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingTop: 18,
        paddingBottom: 20,
    },

    container3: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingTop: 18,
        paddingBottom: 20,
    },

    container4: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingTop: 18,
        paddingBottom: 20,
    },

    container5: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingTop: 18,
        paddingBottom: 20,
    },

    container6: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingTop: 18,
        paddingBottom: 20,
    },

    heading: {
        fontSize: 16,
        color: 'grey',
        paddingLeft: 15,
    },

    link: {
        fontSize: 16,
        color: 'red',
        paddingLeft: 15,
        paddingTop: 15,
    }
})
