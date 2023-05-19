import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Video from 'react-native-video';

const Approvelcomplaints = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('approvedComplaints')
      .orderBy('timestamp', 'desc')
      .get();
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);


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

export default Approvelcomplaints;
