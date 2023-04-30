import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CitizenHome from '../screens/CitizenModule/CitizenHome';
import CustomDrawer from '../consts/CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/Colors';
import Tutorials from '../screens/CitizenModule/Tutorials';
import Profile from '../screens/CitizenModule/Profile';
import Contact from '../screens/CitizenModule/ContactUs';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (

        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: COLORS.primary,
                drawerActiveTintColor: '#fff',
            }} >
            <Drawer.Screen
                name="Citizen Home"
                component={CitizenHome}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home-outline' size={22} color={color} />
                    ),
                    drawerLabelStyle: { marginLeft: -20, fontWeight: '700', fontSize: 16 },

                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{ left: -20, paddingRight: 20 }} >
                                <MaterialCommunityIcons name='bell-ring-outline' size={28} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ left: -20 }} >
                                <MaterialCommunityIcons name='email-outline' size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 100,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary,
                        shadowColor: '#000',
                        elevation: 25
                    }
                }}
            />

            <Drawer.Screen
                name="Citizen Tutorials"
                component={Tutorials}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='information-outline' size={22} color={color} />
                    ),
                    drawerLabelStyle: { marginLeft: -20, fontWeight: '700', fontSize: 16 },

                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{ left: -20, paddingRight: 20 }} >
                                <MaterialCommunityIcons name='bell-ring-outline' size={28} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ left: -20 }} >
                                <MaterialCommunityIcons name='email-outline' size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 100,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary,
                        shadowColor: '#000',
                        elevation: 25
                    }
                }}
            />

            <Drawer.Screen
                name="Citizen Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account-outline' size={22} color={color} />
                    ),
                    drawerLabelStyle: { marginLeft: -20, fontWeight: '700', fontSize: 16 },

                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{ left: -20, paddingRight: 20 }} >
                                <MaterialCommunityIcons name='bell-ring-outline' size={28} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ left: -20 }} >
                                <MaterialCommunityIcons name='email-outline' size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 100,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary,
                        shadowColor: '#000',
                        elevation: 25
                    }
                }}
            />

            <Drawer.Screen
                name="Citizen Contact Us"
                component={Contact}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='phone-ring-outline' size={22} color={color} />
                    ),
                    drawerLabelStyle: { marginLeft: -20, fontWeight: '700', fontSize: 16 },

                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{ left: -20, paddingRight: 20 }} >
                                <MaterialCommunityIcons name='bell-ring-outline' size={28} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ left: -20 }} >
                                <MaterialCommunityIcons name='email-outline' size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 100,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary,
                        shadowColor: '#000',
                        elevation: 25
                    }
                }}
            />            
                
        </Drawer.Navigator >

    );
}

export default DrawerNavigator;