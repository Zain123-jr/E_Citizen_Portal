import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/Colors';

const Complaints = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.maincontainer} >
      <ScrollView>

        <View style={styles.head} >
          <Text style={styles.heading} >Select Category</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" style={styles.icon1} onPress={() => navigation.navigate('CitizenHome')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.Listcontainer} >
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image source={require('../../../assets/svg_icons/torture.webp')} style={styles.image} />
              <Text style={styles.text} >Torture</Text>
              <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Complaints

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  Listcontainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingTop: 20,
    paddingBottom: 25,
  },

  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: '700',
    top: 10,
    left: 30
  },

  image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    left: 15
  },

  icon: {
    position: 'absolute',
    left: 350,
    top: 12,
  },

  icon1: {
    bottom: 5,
    left: 10
  },

  head: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 15,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    top: 15
  }
})