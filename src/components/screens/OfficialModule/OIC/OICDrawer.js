import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import OICHomepage from './OICHomepage';
import OICChangePassword from './UpdateForms/OICChangePassword';
import OICProfile from './UpdateForms/OICProfile';
import OICContactUs from './UpdateForms/OICContactUs';
import OICLogout from './UpdateForms/OICLogout';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const OICDrawer = () => {

  return (
    <Drawer.Navigator
      drawerContent={props => <OICLogout {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Home"
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
        name="Profile"
        component={OICProfile}
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
        name="ChangePassword"
        component={OICChangePassword}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="lock-outline"
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
        name="Contact Us"
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
