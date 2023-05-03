import React from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const OICHomepage = ({ navigation }) => {
    
    

    return (

        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('OICViewComplaints')} style={styles.card}>
                <View>
                    <Image source={require('../../../../assets/complaint.png')} style={styles.Image} />
                    <Text style={styles.title}>Complaints</Text>                    
                </View>
            </TouchableOpacity>
            
        </View>

    )
}

export default OICHomepage;


const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: '45%',
        height: '50%',
        top: 130,
        left: 10,
        padding:20
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
        textAlign:'center',
        color:'black'
    },

    Image:{        
        resizeMode:'contain',
        width:'60%',
        height:'60%',
        left:20        
    }

})