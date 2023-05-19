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

const ViewComplaints = ({navigation}) => {
  const [complaints, setComplaints] = useState([]);
  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('history')
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
          renderItem={({item: file}) => (
            <>
              <View key={file.name}>
                {file.name.endsWith('.mp4') ? (
                  <Video
                    source={{uri: file.downloadUrl}}
                    style={{width: 120, height: 140}}
                    controls
                  />
                ) : (
                  <Image
                    source={{uri: file.downloadUrl}}
                    style={{width: 120, height: 140}}
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

  iconcontainer: {
    flexDirection: 'row',
    left: 160,
    alignItems: 'center',
  },

  deleteicon: {
    paddingRight: 10,
  },

  editicon: {
    paddingRight: 10,
  },
});
