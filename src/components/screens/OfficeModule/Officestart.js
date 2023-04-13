import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity
} from "react-native";

const Officer = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
     <View>
        <Text>select according to your rank</Text>
        <TouchableOpacity
                  onPress={() => navigation.navigate('OICSignup')}
               
                  style={[
                    styles.button
                  ]} >
                  <Text style={styles.buttonText}>OIC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PolicemenSignup')}
                  
                  style={[
                    styles.button
                  ]} >
                  <Text style={styles.buttonText}>Policemen</Text>
                </TouchableOpacity>
                
     </View>
    </SafeAreaView>
  );
};
export default Officer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: "center",
        textAlign: 'center',
    },


    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor:'green'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

  


});



