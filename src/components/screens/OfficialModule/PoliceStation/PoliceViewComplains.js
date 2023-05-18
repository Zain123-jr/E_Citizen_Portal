import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';

const PoliceViewComplains = ({navigation}) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PoliceStationHomepage')}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>Police Complaints Section</Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
            This is Police View Complaints Screen
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PoliceViewComplains;

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
});
