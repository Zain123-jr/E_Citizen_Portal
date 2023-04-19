import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';

const Contact = ({navigation}) => {
  return (
    <View>
      <View style={styles.formContainer}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="Email: (Hello123@gmail.com)"
            placeholderTextColor={COLORS.grey}
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={30}
            style={styles.icon}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="Address Line"
            placeholderTextColor={COLORS.grey}
          />
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={30}
            style={styles.icon}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('CitizenHome')}
          style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  primarycontainer: {
    flex: 1,
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
