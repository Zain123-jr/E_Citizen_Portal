import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import COLORS from './Colors';
import imgPlaceHolder from '../../assets/defualt-Avatar.png';

const PSCustomDrawer = props => {
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();

  function Logout() {
    alert('Logout');
    navigation.navigate('PoliceStationLogin');
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        contentContainerStyle={{backgroundColor: COLORS.primary}}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PoliceStationPersonal')}>
                <Image
                  style={styles.image}
                  source={profile ? {uri: profile} : imgPlaceHolder}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: 28,
          borderTopColor: 'green',
          borderTopWidth: 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => Logout()}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="logout" size={22} color="grey" />
            <Text
              style={{
                fontWeight: '700',
                color: 'grey',
                fontSize: 15,
                left: 5,
                top: 0,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PSCustomDrawer;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 20,
  },

  profileContainer: {
    flex: 0.8,
    marginTop: 20,
  },

  imgContainer: {},

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: COLORS.primary,
    borderWidth: 4,
  },
});
