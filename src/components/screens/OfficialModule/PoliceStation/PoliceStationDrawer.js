import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import PoliceStationHomepage from './PoliceStationHomepage';
import PoliceStationProfile from './PoliceStationProfile';
import PoliceStationChangePassword from './UpdateForms/PoliceStationChangePassword';
import PoliceStationContactUs from './UpdateForms/PoliceStationContactUs';
import PoliceStationLogout from './UpdateForms/PoliceStationLogout';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const PoliceStationDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <PoliceStationLogout {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: '#fff',
      }}>

      <Drawer.Screen
        name="Home"
        component={PoliceStationHomepage}
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
        component={PoliceStationProfile}
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
        name="ChangePassword"
        component={PoliceStationChangePassword}
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
        component={PoliceStationContactUs}
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
export default PoliceStationDrawer;
