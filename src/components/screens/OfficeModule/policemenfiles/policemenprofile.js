import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import COLORS from '../../../consts/Colors';
import PolicemenContact from './policeupdate/Policemencontact';
import Policepersonal from './Policemenpersonal';


const Tab = createMaterialTopTabNavigator();

const PolicemenProfile = () => {
    return (
        <View style={{ flex: 1 }} >
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                        color: '#000',
                        fontWeight: '700'
                    },

                    tabBarIndicatorStyle:{
                        backgroundColor:COLORS.primary,
                    },

                    tabBarStyle: {
                        backgroundColor: '#fff',
                        paddingTop: 10,
                        paddingBottom: 10,
                    },
                }}>
                <Tab.Screen name="PolicemenContact" component={PolicemenContact} />
                <Tab.Screen name="Policepersonal" component={Policepersonal} />
                
            </Tab.Navigator>
        </View>
    )
}

export default PolicemenProfile;

const styles = StyleSheet.create({})