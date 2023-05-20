import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import Approvelcomplaints from './Approvelcomplaints';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Rejectcomplaints from './Rejectcomplaints';

const Drawer = createDrawerNavigator();

const OICComplaintsHistory = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: '#fff',
        headerStyle: {
          height: 100,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary,
          shadowColor: '#000',
          elevation: 25,
        },
      }}>
      <Drawer.Screen
        name="Approve Complaints"
        component={Approvelcomplaints}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="check-decagram-outline"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},
        }}
      />
      <Drawer.Screen
        name="Reject Complaints"
        component={Rejectcomplaints}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},
        }}
      />
    </Drawer.Navigator>
  );
};

export default OICComplaintsHistory;

const styles = StyleSheet.create({});
