import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const OfficialPortal = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View>
        <Text>This is Official Portal</Text>
     </View>
    </SafeAreaView>
  );
};
export default OfficialPortal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize:30,
    textAlign:'center',
  },

});
