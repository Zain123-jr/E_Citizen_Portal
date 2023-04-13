import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../consts/Colors';
import PolicemenHomepage from '../PolicemenHomepage';
import PolicemenProfile from './policemenprofile';
import PolicemenChangePassword from './policeupdate/Policemenchangepassword';
import PoliceContactUs from './policeupdate/Policecontactus';
import Policelogout from './policeupdate/Policelogout';
import { createDrawerNavigator } from '@react-navigation/drawer';

const dra=createDrawerNavigator ()
const DrawerNav = () => {

    return (
       <dra.Navigator  drawerContent={props => <Policelogout {...props} />}
       screenOptions={{
           drawerActiveBackgroundColor: COLORS.primary,
           drawerActiveTintColor: '#fff',
       }}  >
        <dra.Screen
                name="PolicemenHomepage"
                component={PolicemenHomepage}
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

<dra.Screen
                name="PolicemenProfile"
                component={PolicemenProfile}
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
            <dra.Screen
                name="PolicemenChangePassword "
                component={PolicemenChangePassword }
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
            <dra.Screen
                name="Contact Us"
                component={PoliceContactUs}
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


       </dra.Navigator>
    );
}
export default DrawerNav;