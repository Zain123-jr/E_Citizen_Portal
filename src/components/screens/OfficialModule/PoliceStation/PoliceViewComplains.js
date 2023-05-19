import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList, Image, Button
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import firestore from '@react-native-firebase/firestore';
import Video from 'react-native-video';

const PoliceViewComplaints = ({navigation}) => {

  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('policestation')
      .orderBy('timestamp', 'desc')
      .get();
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const approveComplaint = async (complaintId) => {
    // Fetch the complaint by ID
    const complaintRef = firestore().collection('policestation').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('progress').add(complaintData);
    // Delete the complaint from the original collection
    await complaintRef.delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const deleteComplaint = async (complaintId) => {
      // Fetch the complaint by ID
      const complaintRef = firestore().collection('policestation').doc(complaintId);
      const complaintDoc = await complaintRef.get();
      const complaintData = complaintDoc.data();
  
      // Upload the complaint to a separate place
      await firestore().collection('pending').add(complaintData);

  
      // Delete the complaint from the original collection
      await complaintRef.delete();
  
      // Refresh the complaints list
    fetchComplaints();
  };

  const renderItem = ({ item }) => {
    const timestamp = item.timestamp.toDate(); // Convert timestamp to Date object
    const formattedTimestamp = timestamp.toLocaleString();
    return (
      <View>
        <Text>report</Text>
        <Text>subject:{item.subject}</Text>
        <Text>category:{item.category}</Text>
        <Text>details:{item.details}</Text>
        <Text>address:{item.address}</Text>
        <Text>province:{item.province}</Text>
        <Text>district:{item.district}</Text>
        <Text>tehsil:{item.tehsil}</Text>
        <Text>timestamp:{formattedTimestamp}</Text> 
        <FlatList
          data={item.files}
          keyExtractor={file => file.name}
          renderItem={({ item: file }) => (
            <>
              <View key={file.name}>
                {file.name.endsWith('.mp4') ? (
                  <Video
                    source={{ uri: file.downloadUrl }}
                    style={{ width: 120, height: 140 }}
                    controls
                  />
                ) : (
                  <Image
                    source={{ uri: file.downloadUrl }}
                    style={{ width: 120, height: 140 }}
                  />
                )}
              </View>
            </>
          )}
        />
        <Button
          title="progress"
          onPress={() => approveComplaint(item.id)}
        />
        <Button
          title="pending"
          onPress={() => deleteComplaint(item.id)}
        />
      </View>
    );
  };

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

        <FlatList
      data={complaints}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default PoliceViewComplaints ;

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
