import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/Colors';

const CitizenComplaints = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.maincontainer} >
      <ScrollView>

        <View style={styles.head} >
          <TouchableOpacity onPress={() => navigation.navigate('CitizenHome')} >
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" style={styles.icon1} />
          </TouchableOpacity>
          <Text style={styles.heading} >Select Category</Text>
        </View>

        <View style={styles.categorycontainer} >
          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('TortureForm')} >
                <Image source={require('../../../assets/svg_icons/torture.webp')} style={styles.image} />
                <Text style={styles.text} >Torture</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/kidnapping.png')} style={styles.image} />
                <Text style={styles.text} >Kidnapping</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/killing.png')} style={styles.image} />
                <Text style={styles.text} >Killing</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/robbery.png')} style={styles.image} />
                <Text style={styles.text} >Robbery</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/theft.png')} style={styles.image} />
                <Text style={styles.text} >Theft</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/rape.webp')} style={styles.image} />
                <Text style={styles.text} >Rape</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/child_abuse.png')} style={styles.image} />
                <Text style={styles.text} >Child Abuse</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/svg_icons/missing_person.png')} style={styles.image} />
                <Text style={styles.text} >Missing Person</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CitizenComplaints

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
    top: 20,
  },

  head: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    top: -18
  }
})