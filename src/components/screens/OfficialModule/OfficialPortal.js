import React from 'react';
import Officer from './OfficialStart';
import OICDrawer from '../../navigation/OICDrawer';
import OICViewComplaints from './OIC/OICViewComplains';
import PoliceViewComplaints from './PoliceStation/PoliceViewComplains';
import PoliceStationDrawer from '../../navigation/PoliceStationDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PoliceStationPersonal from './PoliceStation/PoliceStationPersonal';
import OICPersonal from './OIC/UpdateForms/OICPersonal';
import PoliceStationContact from './PoliceStation/PoliceStationContact';
import OICHomepage from './OIC/OICHomepage';

const Stack = createNativeStackNavigator();

const OfficialPortal = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Officer" component={Officer}></Stack.Screen>
      <Stack.Screen name="OICHomepage" component={OICDrawer}></Stack.Screen>

      <Stack.Screen
        name="PoliceStationHomepage"
        component={PoliceStationDrawer}></Stack.Screen>

      <Stack.Screen name="OICDrawer" component={OICDrawer}></Stack.Screen>
      <Stack.Screen
        name="OICViewComplaints"
        component={OICViewComplaints}></Stack.Screen>
      <Stack.Screen
        name="PoliceViewComplaints"
        component={PoliceViewComplaints}></Stack.Screen>
      <Stack.Screen name="OICPersonal" component={OICPersonal} />
      <Stack.Screen
        name="PoliceStationPersonal"
        component={PoliceStationPersonal}
      />
      <Stack.Screen
        name="PoliceStationContact"
        component={PoliceStationContact}
      />
    </Stack.Navigator>
  );
};
export default OfficialPortal;
