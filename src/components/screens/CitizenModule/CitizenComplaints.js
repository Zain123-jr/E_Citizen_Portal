import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/Colors';

const CitizenComplaints = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.maincontainer} >
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.navigate('CitizenHome')} >
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>Select Category</Text>
        </View>

        <View style={styles.categorycontainer} >
          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Torture')} >
                <Image source={require('../../../assets/svg_icons/torture.webp')} style={styles.image} />
                <Text style={styles.text} >Torture</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Kidnapping')} >
                <Image source={require('../../../assets/svg_icons/kidnapping.png')} style={styles.image} />
                <Text style={styles.text} >Kidnapping</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Killing')} >
                <Image source={require('../../../assets/svg_icons/killing.png')} style={styles.image} />
                <Text style={styles.text} >Killing</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Robbery')} >
                <Image source={require('../../../assets/svg_icons/robbery.png')} style={styles.image} />
                <Text style={styles.text} >Robbery</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Rape')} >
                <Image source={require('../../../assets/svg_icons/rape.webp')} style={styles.image} />
                <Text style={styles.text} >Rape</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('ChildAbuse')} >
                <Image source={require('../../../assets/svg_icons/child_abuse.png')} style={styles.image} />
                <Text style={styles.text} >Child Abuse</Text>
                <MaterialCommunityIcons name="arrow-right-circle" size={30} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Listcontainer} >
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('MissingPerson')} >
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
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
    top: 12,
    left: 30
  },

  image: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    left: 15,
    top: 4
  },

  icon: {
    position: 'absolute',
    left: 300,
    top: 12,
    color: COLORS.dark
  },

  head:{
    flex:1,
    flexDirection:'row',
    backgroundColor:COLORS.primary,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
    padding:30,
  },

  heading:{
    flex:1,
    textAlign:'center',
    color:'#fff',
    fontSize:22,
  }

})