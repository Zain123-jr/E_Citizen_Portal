import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../consts/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pending from './Pending';
import Close from './Closing';
import Progress from './InProgress';

const Drawer = createDrawerNavigator();

const PoliceComplaintsHistory = () => {
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
        name="InProgress Complaints"
        component={Progress}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="progress-alert"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},
        }}
      />
      <Drawer.Screen
        name="Pending Complaints"
        component={Pending}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="progress-clock"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},
        }}
      />
      <Drawer.Screen
        name="Close Complaints"
        component={Close}
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

export default PoliceComplaintsHistory;

const styles = StyleSheet.create({});
