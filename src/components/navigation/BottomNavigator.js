import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CitizenPortal from '../screens/CitizenModule/CitizenPortal';
import OfficialPortal from '../screens/OfficialModule/OfficialPortal';
import COLORS from '../consts/Colors';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,        
        tabBarStyle: {
          backgroundColor:'#000',      
          height:60           
        },
        tabBarActiveTintColor:COLORS.primary,
        tabBarInactiveTintColor:COLORS.white,    
        tabBarLabelStyle:{paddingBottom:5, fontSize:12, fontWeight:'600' },        
      
      }}
    >

      <Tab.Screen
        name="Citizen"
        component={CitizenPortal}
        options={{
          tabBarLabel: 'Citizen Portal',         
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Official"
        component={OfficialPortal}
        options={{
          tabBarLabel: 'Official Portal',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="police-badge-outline" color={color} size={30} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

export default BottomNavigator;