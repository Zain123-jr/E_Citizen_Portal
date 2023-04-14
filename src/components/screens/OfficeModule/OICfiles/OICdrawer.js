import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../consts/Colors';
import OICHomepage from '../OICHomepage';
import OICChangePassword from './OICupdate/OICchangepassward';
import OICProfile from './OICupdate/OICprofile';
import OICContactUs from './OICupdate/OICcontactus';
import OIClogout from './OICupdate/OIClogout';
import { createDrawerNavigator } from '@react-navigation/drawer';

const draw=createDrawerNavigator ()
const Drawe = () => {

    return (
       <draw.Navigator drawerContent={props => <OIClogout {...props} />}
       screenOptions={{
           drawerActiveBackgroundColor: COLORS.primary,
           drawerActiveTintColor: '#fff',
       }}>
        <draw.Screen
                name="Home"
                component={OICHomepage}
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

<draw.Screen
                name="Profile"
                component={OICProfile}
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
            <draw.Screen
                name="ChangePassword"
                component={OICChangePassword}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name='lock-outline' size={22} color={color} />
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
            <draw.Screen
                name="Contact Us"
                component={OICContactUs}
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
       </draw.Navigator>
    );
}
export default Drawe;