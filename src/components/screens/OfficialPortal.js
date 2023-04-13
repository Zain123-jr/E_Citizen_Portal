import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import OICSignup from "./OfficeModule/OICsignin";
import Policemen from "./OfficeModule/Policemen";
import Officer from "./OfficeModule/Officestart";
import OICLogin from "./OfficeModule/OIClogin";
import OICHomepage from "./OfficeModule/OICHomepage";
import PolicemenSignup from "./OfficeModule/Policemensignin";
import PolicemenLogin from "./OfficeModule/Policemenlogin"
import PolicemenHomepage from "./OfficeModule/PolicemenHomepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const sta=createNativeStackNavigator()

const OfficialPortal = () => {
  return (
    
      <sta.Navigator
      >
        <sta.Screen name="Officer" component={Officer}></sta.Screen>
        <sta.Screen name="OICSignup" component={OICSignup}></sta.Screen>
        <sta.Screen name="OICLogin" component={OICLogin}></sta.Screen>
        <sta.Screen name="OICHomepage" component={OICHomepage}></sta.Screen>
        <sta.Screen name="PolicemenSignup " component={PolicemenSignup }></sta.Screen>
        <sta.Screen name="PolicemenLogin " component={PolicemenLogin }></sta.Screen>
        <sta.Screen name="PolicemenHomepage" component={PolicemenHomepage }></sta.Screen>
        
      
       
      </sta.Navigator>

   
  );
};
export default OfficialPortal;
