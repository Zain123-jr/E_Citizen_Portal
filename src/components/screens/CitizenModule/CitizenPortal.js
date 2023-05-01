import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import FirstButton from "../../button/FirstButton";
import SecondButton from "../../button/SecondButton";
import COLORS from "../../consts/Colors";



const CitizenPortal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/bg.jpg")}
      >
        <View style={{flex:1, marginTop:185}} >
          <Text style={styles.heading} >Welcome to</Text>
          <Text style={styles.subheading}>E-Citizen Portal</Text>
          <Text style={styles.description} >Please Signup first</Text>
          <FirstButton title={"Signup"} onPress={() => navigation.navigate('CitizenSignup')} />
          <SecondButton title={"Login"} onPress={() => navigation.navigate('CitizenLogin')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CitizenPortal;

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
