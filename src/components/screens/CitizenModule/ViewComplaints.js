import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
import COLORS from '../../consts/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const ViewComplaints = ({navigation}) => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const user = auth().currentUser;
    if (!user) {
      // Handle case when user is not signed in
      return;
    }
    const querySnapshot = await firestore()
      .collection('history')
      .where('userId', '==', user.uid)
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
          data={item.files}
          keyExtractor={file => file.name}
          style={{flex: 1, flexDirection: 'row'}}
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
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.navigate('CitizenHome')}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>View Complaints</Text>
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

export default ViewComplaints;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
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

  complaintsContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 5,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.grey,
    paddingBottom: 20,
  },

  complaintFields: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 5,
  },
});
