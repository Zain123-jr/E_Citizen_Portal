import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import imgPlaceHolder from '../../../../assets/defualt-Avatar.png';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import COLORS from '../../../consts/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

const Personal = ({navigation, route}) => {
  const [profile, setProfile] = useState(null);

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile(image.path);
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.primarycontainer}>
          <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.image}
                source={profile ? {uri: profile} : imgPlaceHolder}
              />
              <TouchableOpacity
                onPress={imagePick}
                style={{alignItems: 'flex-end', top: -10}}>
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={30}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.formContainer}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor={COLORS.gender}
                />
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={30}
                  style={styles.icon}
                />
              </View>
              
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                />
                <MaterialCommunityIcons
                  name="phone-outline"
                  size={30}
                  style={styles.icon}
                />
              </View>
                          
              <TouchableOpacity
                onPress={() => navigation.navigate('CitizenHome')}
                style={
                  styles.button
                }>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Personal;

const styles = StyleSheet.create({
  primarycontainer: {
    flex: 1,
  },

  profileContainer: {
    flex: 0.8,
    marginTop: 20,
    alignItems: 'center',
  },

  imgContainer: {},

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: COLORS.primary,
    borderWidth: 4,
  },

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 10,
    width: '95%',
    marginLeft: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    paddingLeft: 40,
    marginBottom: 25,
    paddingBottom: 8,
    color: '#000',
    fontWeight: '800',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: '#000',
  },
});
