import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/Colors';
import CitizenComplaints from '../screens/CitizenModule/CitizenComplaints';
import ViewComplaints from '../screens/CitizenModule/ViewComplaints';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                    height:60
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.white,
                tabBarLabelStyle: { paddingBottom: 5, fontSize: 12, fontWeight: '600' },

            }}
        >

            <Tab.Screen
                name="Complaints Categories"
                component={CitizenComplaints}
                options={{
                    tabBarLabel: 'Complaints Categories',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alert-box-outline" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name="View Complaints"
                component={ViewComplaints}
                options={{
                    tabBarLabel: 'View Complaints',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="eye-outline" color={color} size={30} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
};

export default BottomNavigator;