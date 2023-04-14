import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";


import COLORS from "../../consts/Colors";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";



const Officer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/bg.jpg")}
      >
        <View style={{flex:1, marginTop:185}} >
          <Text style={styles.heading} >Welcome to</Text>
          <Text style={styles.subheading}>E-Citizen Portal</Text>
          <Text style={styles.description} >Please select your rank</Text>
          <PrimaryButton title={"OIC"} onPress={() => navigation.navigate('OICSignup')} />
          <SecondaryButton title={"Police HQ"} onPress={() => navigation.navigate('PoliceStationSignup')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Officer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    textAlign: 'center',
    fontSize: 25,
    color:COLORS.secondary,
  },

  subheading: {
    textAlign: 'center',
    fontSize: 45,
    color:COLORS.primary,
  },

  description: {
    textAlign: 'center',
    top:5,
    fontSize: 18,
    color: 'grey'
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode:'cover',
  },

});



