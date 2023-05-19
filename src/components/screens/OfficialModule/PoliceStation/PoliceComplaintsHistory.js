import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../../consts/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OICCustomDrawer from '../../../consts/OICCustomDrawer';
import Pending from './Pending';
import Close from './Closing';
import Progress from './InProgress';
const Drawer = createDrawerNavigator();

const PoliceComplaintsHistory = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <OICCustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: '#fff',
        headerStyle: {
          height: 100,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary,
          shadowColor: '#000',
          elevation: 25,
        },
      }}>
      <Drawer.Screen name="In progress" component={Progress} />
      <Drawer.Screen name="Pending" component={Pending} />
      <Drawer.Screen name="Close" component={Close} />
    </Drawer.Navigator>
  );
};

export default PoliceComplaintsHistory;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  head: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 30,
  },

  heading: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
  },

  item: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },

  iconcontainer: {
    flexDirection: 'row',
    left: 160,
    alignItems: 'center',
  },

  deleteicon: {
    paddingRight: 10,
  },

  editicon: {
    paddingRight: 10,
  },
});
