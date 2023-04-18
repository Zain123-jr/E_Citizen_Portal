import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import COLORS from '../../../consts/Colors';
import PoliceStationPersonal from '../PoliceStation/PoliceStationPersonal';
import PoliceStationContact from '../PoliceStation/PoliceStationContact';

const Tab = createMaterialTopTabNavigator();

const PolicStationProfile = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            color: '#000',
            fontWeight: '700',
          },

          tabBarIndicatorStyle: {
            backgroundColor: COLORS.primary,
          },

          tabBarStyle: {
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10,
          },
        }}>
        <Tab.Screen name="Personal" component={PoliceStationPersonal} />
        <Tab.Screen name="Contact" component={PoliceStationContact} />
      </Tab.Navigator>
    </View>
  );
};

export default PolicStationProfile;

const styles = StyleSheet.create({});
