import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';

const OICViewComplains = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('complaints')
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
    const complaintRef = firestore().collection('complaints').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('approvedComplaints').add(complaintData);

    // Delete the complaint from the original collection
    await complaintRef.delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const deleteComplaint = async (complaintId) => {
    // Delete the complaint from Firestore
    await firestore().collection('complaints').doc(complaintId).delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.subject}</Text>
        <Text>{item.category}</Text>
        <Text>{item.details}</Text>
        <Text>{item.address}</Text>
        <Text>{item.province}</Text>
        <Text>{item.district}</Text>
        <Text>{item.tehsil}</Text>
        <FlatList
          data={item.files}
          keyExtractor={file => file.name}
          renderItem={({ item: file }) => (
            <>
              <View key={file.name}>
                {file.name.endsWith('.mp4') ? (
                  <Video
                    source={{ uri: file.downloadUrl }}
                    style={{ width: 320, height: 240 }}
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
          title="Approve"
          onPress={() => approveComplaint(item.id)}
        />
        <Button
          title="Delete"
          onPress={() => deleteComplaint(item.id)}
        />
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

export default OICViewComplains;
