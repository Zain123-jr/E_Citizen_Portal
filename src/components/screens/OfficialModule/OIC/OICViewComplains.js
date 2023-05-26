// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   Button,
//   TouchableOpacity,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import Video from 'react-native-video';
// import COLORS from '../../../consts/Colors';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const OICViewComplains = ({navigation}) => {
//   const [complaints, setComplaints] = useState([]);

//   const fetchComplaints = async () => {
//     const querySnapshot = await firestore()
//       .collection('complaints')
//       .orderBy('timestamp', 'desc')
//       .get();
//     const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
//     setComplaints(data);
//   };

//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   const approveComplaint = async complaintId => {
//     // Fetch the complaint by ID
//     const complaintRef = firestore().collection('complaints').doc(complaintId);
//     const complaintDoc = await complaintRef.get();
//     const complaintData = complaintDoc.data();

//     // Upload the complaint to a separate place
//     await firestore().collection('approvedComplaints').add(complaintData);
//     await firestore().collection('policestation').add(complaintData);
//     // Delete the complaint from the original collection
//     await complaintRef.delete();

//     // Refresh the complaints list
//     fetchComplaints();
//   };

//   const deleteComplaint = async complaintId => {
//     // Fetch the complaint by ID
//     const complaintRef = firestore().collection('complaints').doc(complaintId);
//     const complaintDoc = await complaintRef.get();
//     const complaintData = complaintDoc.data();

//     // Upload the complaint to a separate place
//     await firestore().collection('rejectComplaints').add(complaintData);

//     // Delete the complaint from the original collection
//     await complaintRef.delete();

//     // Refresh the complaints list
//     fetchComplaints();
//   };

//   const renderItem = ({item}) => {
//     const timestamp = item.timestamp.toDate(); // Convert timestamp to Date object
//     const formattedTimestamp = timestamp.toLocaleString();
//     return (
//       <View style={styles.complaintsContainer}>
//         <Text style={styles.complaintFields}>Report</Text>
//         <Text style={styles.complaintFields}>Subject: {item.subject}</Text>
//         <Text style={styles.complaintFields}>Category: {item.category}</Text>
//         <Text style={styles.complaintFields}>Details: {item.details}</Text>
//         <Text style={styles.complaintFields}>Address: {item.address}</Text>
//         <Text style={styles.complaintFields}>Province: {item.province}</Text>
//         <Text style={styles.complaintFields}>District: {item.district}</Text>
//         <Text style={styles.complaintFields}>Tehsil: {item.tehsil}</Text>
//         <Text style={styles.complaintFields}>
//           TimeStamp: {formattedTimestamp}
//         </Text>
//         <FlatList
//           data={item.files}
//           keyExtractor={file => file.name}
//           renderItem={({item: file}) => (
//             <>
//               <View key={file.name}>
//                 {file.name.endsWith('.mp4') ? (
//                   <Video
//                     source={{uri: file.downloadUrl}}
//                     style={{width: 120, height: 140}}
//                     controls
//                   />
//                 ) : (
//                   <Image
//                     source={{uri: file.downloadUrl}}
//                     style={{width: 120, height: 140}}
//                   />
//                 )}
//               </View>
//             </>
//           )}
//         />
//         {/* <Button title="Approve" onPress={() => approveComplaint(item.id)} />
//         <Button title="Delete" onPress={() => deleteComplaint(item.id)} /> */}

//         <View style={styles.buttonContainer}>
//           <View style={styles.approveButton}>
//             <TouchableOpacity onPress={() => approveComplaint(item.id)}>
//               <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
//                 Approve
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.rejectButton}>
//             <TouchableOpacity onPress={() => deleteComplaint(item.id)}>
//               <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
//                 Reject
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.maincontainer}>
//       <ScrollView>
//         <View style={styles.head}>
//           <TouchableOpacity onPress={() => navigation.navigate('OICHomepage')}>
//             <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.heading}>OIC Complaints Section</Text>
//         </View>

//         {/* <View style={{flex: 1}}>
//           <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
//             This is OIC View Complaints Screen
//           </Text>
//         </View> */}
//       </ScrollView>

//       <View>
//         <FlatList
//           data={complaints}
//           keyExtractor={item => item.id}
//           renderItem={renderItem}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default OICViewComplains;

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex:1,
//     backgroundColor: 'white',
//   },

//   head: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: COLORS.primary,
//     borderTopLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     padding: 30,
//   },

//   heading: {
//     flex: 1,
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 22,
//   },

//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     justifyContent: 'space-around',
//     padding: 30,
//   },

//   approveButton: {
//     backgroundColor: COLORS.primary,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 45,
//     paddingRight: 45,
//   },

//   rejectButton: {
//     backgroundColor: 'red',
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 45,
//     paddingRight: 45,
//   },

//   complaintsContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     paddingLeft: 5,
//     paddingTop: 5,
//     borderBottomWidth: 2,
//     borderBottomColor: COLORS.grey,
//     paddingBottom: 5,
//   },

//   complaintFields: {
//     color: COLORS.dark,
//     fontSize: 16,
//     fontWeight: '600',
//     lineHeight: 25,
//     marginBottom: 5,
//   },
// });

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
import COLORS from '../../../consts/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OICViewComplains = ({navigation}) => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const querySnapshot = await firestore()
      .collection('complaints')
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
    const complaintRef = firestore().collection('complaints').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('approvedComplaints').add(complaintData);
    await firestore().collection('policestation').add(complaintData);
    // Delete the complaint from the original collection
    await complaintRef.delete();

    // Refresh the complaints list
    fetchComplaints();
  };

  const deleteComplaint = async complaintId => {
    // Fetch the complaint by ID
    const complaintRef = firestore().collection('complaints').doc(complaintId);
    const complaintDoc = await complaintRef.get();
    const complaintData = complaintDoc.data();

    // Upload the complaint to a separate place
    await firestore().collection('rejectComplaints').add(complaintData);

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

        <View style={styles.buttonContainer}>
          <View style={styles.approveButton}>
            <TouchableOpacity onPress={() => approveComplaint(item.id)}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                Approve
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rejectButton}>
            <TouchableOpacity onPress={() => deleteComplaint(item.id)}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('OICHomepage')}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>OIC Complaints Section</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <FlatList
          data={complaints}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OICViewComplains;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 30,
    paddingHorizontal: 30,
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

  scrollView: {
    flex: 1,
    padding: 10,
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
  },

  complaintFields: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 5,
  },
});
