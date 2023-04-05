import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personal from './UpdateForms/Personal'
import Contact from './UpdateForms/Contact'
import COLORS from '../../consts/Colors';


const Tab = createMaterialTopTabNavigator();

const Profile = () => {
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
                <Tab.Screen name="Personal" component={Personal} />
                <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})