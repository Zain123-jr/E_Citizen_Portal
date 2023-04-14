import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Officer from './OfficeModule/Officestart';
import OicSignup from './OfficeModule/OICsignin';
import OICLogin from './OfficeModule/OIClogin';
import OICHomepage from './OfficeModule/OICHomepage';
import PolicemenSignup from './OfficeModule/Policemensignin';
import PolicemenLogin from './OfficeModule/Policemenlogin';
import DrawerNav from './OfficeModule/policemenfiles/drawerfiles';
import PolicemenHomepage from './OfficeModule/PolicemenHomepage';
import Drawe from './OfficeModule/OICfiles/OICdrawer';
import OICViewComplaints from './OfficeModule/OICfiles/OICviewcomplains';
import PoliceViewComplaints from './OfficeModule/OICfiles/Policeviewcomplains';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const sta = createNativeStackNavigator();
const OfficialPortal = () => {
  return (
    <sta.Navigator>
      <sta.Screen name="Officer" component={Officer}></sta.Screen>
      <sta.Screen name="OICSignup" component={OicSignup}></sta.Screen>
      <sta.Screen name="OICLogin" component={OICLogin}></sta.Screen>
      <sta.Screen name="OICHomepage" component={OICHomepage}></sta.Screen>
      <sta.Screen name="PolicemenSignup" component={PolicemenSignup}></sta.Screen>
      <sta.Screen name="PolicemenLogin" component={PolicemenLogin}></sta.Screen>
      <sta.Screen name="DrawerNav" component={DrawerNav}></sta.Screen>
      <sta.Screen name="Drawe" component={Drawe}></sta.Screen>
      <sta.Screen name="OICViewComplaints" component={OICViewComplaints}></sta.Screen>
      <sta.Screen name="PoliceViewComplaints" component={PoliceViewComplaints}></sta.Screen>
    
    </sta.Navigator>
  );
};
export default OfficialPortal;
