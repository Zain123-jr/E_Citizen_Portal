import React from 'react';
import Officer from './OfficialModule/OfficialStart';
import OICSignup from './OfficialModule/OIC/OICSignup';
import OICLogin from '../screens/OfficialModule/OIC/OICLogin';
import OICHomepage from './OfficialModule/OIC/OICHomepage';
import OICDrawer from '../screens/OfficialModule/OIC/OICDrawer';
import OICViewComplaints from '../screens/OfficialModule/OIC/OICViewComplains';
import PoliceViewComplaints from '../screens/OfficialModule/OIC/PoliceViewComplains';
import PoliceStationSignup from './OfficialModule/PoliceStation/PoliceStationSignup';
import PoliceStationLogin from './OfficialModule/PoliceStation/PoliceStationLogin';
import PoliceStationDrawer from './OfficialModule/PoliceStation/PoliceStationDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PoliceStationPersonal from './OfficialModule/PoliceStation/PoliceStationPersonal';
import OICPersonal from './OfficialModule/OIC/UpdateForms/OICPersonal';
import PoliceStationContact from './OfficialModule/PoliceStation/PoliceStationContact';


const Stack = createNativeStackNavigator();

const OfficialPortal = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Officer" component={Officer}></Stack.Screen>
      <Stack.Screen name="OICSignup" component={OICSignup}></Stack.Screen>
      <Stack.Screen name="OICLogin" component={OICLogin}></Stack.Screen>
      <Stack.Screen name="OICHomepage" component={OICHomepage}></Stack.Screen>
      <Stack.Screen name="PoliceStationSignup" component={PoliceStationSignup}></Stack.Screen>
      <Stack.Screen name="PoliceStationLogin" component={PoliceStationLogin}></Stack.Screen>
      <Stack.Screen name="PoliceStationDrawer" component={PoliceStationDrawer}></Stack.Screen>
      <Stack.Screen name="OICDrawer" component={OICDrawer}></Stack.Screen>
      <Stack.Screen name="OICViewComplaints" component={OICViewComplaints}></Stack.Screen>
      <Stack.Screen name="PoliceViewComplaints" component={PoliceViewComplaints}></Stack.Screen>            
      <Stack.Screen name='OICPersonal' component={OICPersonal} />
      <Stack.Screen name='PoliceStationPersonal' component={PoliceStationPersonal} />
      <Stack.Screen name='PoliceStationContact' component={PoliceStationContact} />
    </Stack.Navigator>
  );
};
export default OfficialPortal;
