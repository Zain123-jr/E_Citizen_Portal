import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import firestore from '@react-native-firebase/firestore';
import Video from 'react-native-video';

const Progress = ({navigation}) => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('progress')
      .orderBy('timestamp', 'desc')
      .get();
    const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const approveComplaint = async complaintId => {
    // Fetch the complaint by ID
    const complaintRef = firestore().collection('progress').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('pending').add(complaintData);
    // Delete the complaint from the original collection
    await complaintRef.delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const deleteComplaint = async complaintId => {
    // Fetch the complaint by ID
    const complaintRef = firestore().collection('progress').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('close').add(complaintData);

    // Delete the complaint from the original collection
    await complaintRef.delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const renderItem = ({item}) => {
    const timestamp = item.timestamp.toDate(); // Convert timestamp to Date object
    const formattedTimestamp = timestamp.toLocaleString();
    return (
      <View style={styles.complaintsContainer}>
        <Text style={styles.complaintFields}>Report</Text>
        <Text style={styles.complaintFields}>Subject: {item.subject}</Text>
        <Text style={styles.complaintFields}>Category: {item.category}</Text>
        <Text style={styles.complaintFields}>Details: {item.details}</Text>
        <Text style={styles.complaintFields}>Address: {item.address}</Text>
        <Text style={styles.complaintFields}>Province: {item.province}</Text>
        <Text style={styles.complaintFields}>District: {item.district}</Text>
        <Text style={styles.complaintFields}>Tehsil: {item.tehsil}</Text>
        <Text style={styles.complaintFields}>
          TimeStamp: {formattedTimestamp}
        </Text>
        <FlatList
          style={{flex: 1, flexDirection: 'row'}}
          data={item.files}
          keyExtractor={file => file.name}
          renderItem={({item: file}) => (
            <>
              <View>
                <View key={file.name} style={{top: 8}}>
                  {file.name.endsWith('.mp4') ? (
                    <Video
                      source={{uri: file.downloadUrl}}
                      style={{width: 120, height: 140}}
                      controls
                    />
                  ) : (
                    <Image
                      source={{uri: file.downloadUrl}}
                      style={{width: 100, height: 100, marginRight: 15}}
                    />
                  )}
                </View>
              </View>
            </>
          )}
        />
        {/* <Button title="Pending" onPress={() => approveComplaint(item.id)} />
        <Button title="Close" onPress={() => deleteComplaint(item.id)} /> */}
        <View style={styles.buttonContainer}>
          <View style={styles.approveButton}>
            <TouchableOpacity onPress={() => approveComplaint(item.id)}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
                Pending
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rejectButton}>
            <TouchableOpacity onPress={() => deleteComplaint(item.id)}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={complaints}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Progress;

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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
  },

  approveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 45,
  },

  rejectButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 45,
  },

  complaintsContainer: {
    flexDirection: 'column',
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.grey,
    marginBottom: 5,
    paddingLeft: 5,
  },

  complaintFields: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 5,
  },
});
