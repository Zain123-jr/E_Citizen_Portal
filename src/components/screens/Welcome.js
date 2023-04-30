import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import Button from "../button/Button";
import COLORS from "../consts/Colors";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/bg.jpg")}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 40,
              color: "white",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
           <Text style={styles.upperheading} >Welcome to</Text> {'\n'}
           <Text style={styles.lowerheading} >E-Citizen Portal</Text>
          </Text>

          <Button title={"Get Started"} onPress={() => navigation.navigate('CitizenPortal')} />
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },

  upperheading:{
    fontSize:25,
    color:COLORS.secondary,
  },

  lowerheading:{
    color:COLORS.primary,
  }

});

