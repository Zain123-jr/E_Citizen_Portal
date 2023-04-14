import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import COLORS from '../../../../consts/Colors';
import OICContact from './OICcontact';
import OICpersonal from './OICpersonal';


const Tab = createMaterialTopTabNavigator();

const OICProfile = () => {
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
                    <Tab.Screen name="personal" component={OICpersonal} />
                <Tab.Screen name="Contact " component={OICContact } />
                
                
            </Tab.Navigator>
        </View>
    )
}

export default OICProfile;

const styles = StyleSheet.create({})