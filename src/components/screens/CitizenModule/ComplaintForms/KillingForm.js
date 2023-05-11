import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import {Picker} from '@react-native-picker/picker';

const KillingForm = ({navigation}) => {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');

  function Submit() {
    Alert.alert('Complaint Submit Successfully');
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CitizenComplaints')}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>New Compalaint</Text>
        </View>

        <View>
          <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style={styles.formContainer}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Subject"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    value={subject}
                    onChangeText={setSubject}
                  />
                </View>

                <View
                  style={{
                    borderColor: '#ccc',
                    top: -6,
                    borderWidth: 2,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  }}>
                  <Picker
                    selectedValue={category}
                    onValueChange={setCategory}
                    style={{
                      left: -10,
                      top: 8,
                      color: 'black',
                    }}>
                    <Picker.Item
                      style={styles.item}
                      label="Select category"
                      value=""
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Murder"
                      value="Murder"
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Custodial Death"
                      value="Custodial Death"
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Target Killing"
                      value="Target Killing"
                    />
                  </Picker>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.messagebox}
                    placeholder="Enter Complaint Details Here!"
                    placeholderTextColor="black"
                    multiline={true}
                    numberOfLines={6}
                    value={details}
                    onChangeText={setDetails}
                  />
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.messagebox}
                    placeholder="Enter Complaint Address Here!"
                    placeholderTextColor="black"
                    multiline={true}
                    numberOfLines={6}
                    value={address}
                    onChangeText={setAddress}
                  />
                </View>

                <View
                  style={{
                    borderColor: '#ccc',
                    top: -6,
                    borderWidth: 2,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginBottom: 20,
                    marginTop: 20,
                  }}>
                  <Picker
                    selectedValue={province}
                    onValueChange={setProvince}
                    style={{
                      left: -10,
                      top: 8,
                      color: 'black',
                    }}>
                    <Picker.Item
                      style={styles.item}
                      label="Select Province"
                      value=""
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Punjab"
                      value="Punjab"
                    />
                  </Picker>
                </View>

                <View
                  style={{
                    borderColor: '#ccc',
                    top: -6,
                    borderWidth: 2,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginBottom: 10,
                    marginTop: 20,
                  }}>
                  <Picker
                    selectedValue={district}
                    onValueChange={setDistrict}
                    style={{
                      left: -10,
                      top: 8,
                      color: 'black',
                    }}>
                    <Picker.Item
                      style={styles.item}
                      label="Select District"
                      value=""
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Sargodha"
                      value="Sargodha"
                    />
                  </Picker>
                </View>

                <View
                  style={{
                    borderColor: '#ccc',
                    top: -6,
                    borderWidth: 2,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    marginBottom: 20,
                    marginTop: 20,
                  }}>
                  <Picker
                    selectedValue={tehsil}
                    onValueChange={setTehsil}
                    style={{
                      left: -10,
                      top: 8,
                      color: 'black',
                    }}>
                    <Picker.Item
                      style={styles.item}
                      label="Select Tehsil"
                      value=""
                    />
                    <Picker.Item
                      style={styles.item}
                      label="KotMomin"
                      value="KotMomin"
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Silanwali"
                      value="Silanwali"
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Sahiwal"
                      value="Sahiwal"
                    />
                    <Picker.Item
                      style={styles.item}
                      label="Bhalwal"
                      value="Bhalwal"
                    />
                  </Picker>
                </View>

                <TouchableOpacity
                  onPress={() => Submit()}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Submit Complaint</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KillingForm;

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

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 34,
    borderRadius: 10,
    width: '95%',
    marginLeft: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    paddingLeft: 5,
    marginBottom: 50,
    paddingBottom: 8,
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  messagebox: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    marginBottom: 20,
    paddingLeft: 5,
    paddingBottom: 8,
    color: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  button: {
    padding: 15,
    top: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: COLORS.primary,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  item: {
    fontSize: 18,
  },
});
