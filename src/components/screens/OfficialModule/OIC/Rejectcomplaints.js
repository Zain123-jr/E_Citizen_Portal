import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Button, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Video from 'react-native-video';
import COLORS from '../../../consts/Colors';

const Rejectcomplaints = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('rejectComplaints')
      .orderBy('timestamp', 'desc')
      .get();
    const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

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
                      style={{width: 100, height: 100, marginRight: 15}}
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

export default Rejectcomplaints;

const styles = StyleSheet.create({
  complaintsContainer: {
    flexDirection: 'column',
    paddingVertical: 25,
    paddingLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.grey,
    marginBottom: 10,
  },

  complaintFields: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 5,
  },
});
