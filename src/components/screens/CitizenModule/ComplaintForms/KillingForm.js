import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import {Picker} from '@react-native-picker/picker';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';
const KillingForm = ({navigation}) => {
  const [data, setdata] = useState(null);
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');

  function Submit() {
    navigation.navigate('CitizenHome');
  }
  const pickimage = async () => {
    try {
      const response = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
        copyTo: 'cachesDirectory',
      });
      const uris = response.map(response => response.fileCopyUri);

      console.log(response);
      setdata(uris);
    } catch (error) {
      console.log(err);
    }
  };

  const uploadFiles = async () => {
    const storageRef = storage().ref(`/Citizen/`);

    if (data && data.length > 0) {
      const promises = data.map(async uri => {
        const name = uri.split('/').pop();
        const task = storageRef.child(name).putFile(uri);
        task.on(
          'state_changed',
          snapshot => {
            // Handle upload progress
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          error => {
            // Handle upload error
            console.log(error);
          },
          () => {
            // Handle upload success
            console.log('Upload successful');
          },
        );
        task.then(() => {
          console.log('Video uploaded successfully');
          setdata(null); // Clear selected video after upload
        });
        await task;
        const downloadUrl = await task.snapshot.ref.getDownloadURL();
        return {name, downloadUrl};
      });

      const uploadedFiles = await Promise.all(promises);

      const fields = {
        subject: subject,
        category: category,
        details: details,
        address: address,
        province: province,
        district: district,
        tehsil: tehsil,
        files: uploadedFiles,
      };

      const timestamp = firestore.FieldValue.serverTimestamp();
      const response = await firestore()
        .collection('complaints')
        .doc()
        .set({...fields, timestamp});
      await firestore()
        .collection('history')
        .add({...fields, timestamp});
    } else {
      // Handle the case when no files are selected
      const fields = {
        subject: subject,
        category: category,
        details: details,
        address: address,
        province: province,
        district: district,
        tehsil: tehsil,
        files: [],
      };

      const timestamp = firestore.FieldValue.serverTimestamp();
      const response = await firestore()
        .collection('complaints')
        .doc()
        .set({...fields, timestamp});
      await firestore()
        .collection('history')
        .add({...fields, timestamp});
    }
  };

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
                <ScrollView>
                  <View>
                    {data ? (
                      <View>
                        {data.map(uri => {
                          if (uri.endsWith('.mp4') || uri.endsWith('.mov')) {
                            return (
                              <Video
                                key={uri}
                                source={{uri}}
                                resizeModel="cover"
                                controls={true}
                                style={{
                                  width: 200,
                                  height: 200,
                                }}
                              />
                            );
                          } else {
                            return (
                              <Image
                                key={uri}
                                source={{uri}}
                                style={{width: 100, height: 100}}
                              />
                            );
                          }
                        })}
                      </View>
                    ) : (
                      <Text style={{textAlign: 'center', fontSize: 20}}>
                        select an files
                      </Text>
                    )}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        pickimage();
                      }}
                      style={styles.button}>
                      <Text style={styles.buttonText}>select image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        uploadFiles(), Submit();
                      }}
                      style={styles.button}>
                      <Text style={styles.buttonText}>upload image</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
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
