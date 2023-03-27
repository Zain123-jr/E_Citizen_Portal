import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "./Colors";


const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }} >
            <DrawerContentScrollView contentContainerStyle={{ backgroundColor: COLORS.primary }} >
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }} >
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopColor: 'green', borderTopWidth: 2, flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <MaterialCommunityIcons name="logout" size={22} />
                        <Text style={{ fontWeight: '700' }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CustomDrawer;
