import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/Colors';
import OICHomepage from '../screens/OfficialModule/OIC/OICHomepage';
import OICProfile from '../screens/OfficialModule/OIC/UpdateForms/OICProfile';
import OICContactUs from '../screens/OfficialModule/OIC/UpdateForms/OICContactUs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OICCustomDrawer from '../consts/OICCustomDrawer';

const Drawer = createDrawerNavigator();

const OICDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <OICCustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="OIC Home"
        component={OICHomepage}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},

          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{left: -20, paddingRight: 20}}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{left: -20}}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
            shadowColor: '#000',
            elevation: 25,
          },
        }}
      />

      <Drawer.Screen
        name="OIC Profile"
        component={OICProfile}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},

          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{left: -20, paddingRight: 20}}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{left: -20}}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
            shadowColor: '#000',
            elevation: 25,
          },
        }}
      />

      <Drawer.Screen
        name="OIC Contact Us"
        component={OICContactUs}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="phone-ring-outline"
              size={22}
              color={color}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontWeight: '700', fontSize: 16},

          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{left: -20, paddingRight: 20}}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{left: -20}}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={28}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
            shadowColor: '#000',
            elevation: 25,
          },
        }}
      />
    </Drawer.Navigator>
  );
};
export default OICDrawer;
