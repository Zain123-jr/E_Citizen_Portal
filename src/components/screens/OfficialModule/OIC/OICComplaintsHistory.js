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

const OICComplaintsHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.navigate('OICHomepage')}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>Complaints Section</Text>
        </View>

        <View style={{flex:1}} >
          <Text style={{textAlign:'center', fontSize:18, color:'black'}} >This is OIC Complaints History Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OICComplaintsHistory;

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
