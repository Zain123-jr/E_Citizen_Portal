import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';

const OICViewComplaints = ({ navigation }) => {

    const complaintsData = [
        { id: 1, title: 'Complaint 1' },
        { id: 2, title: 'Complaint 2' },
        { id: 3, title: 'Complaint 3' },
    ];

    const [complaints, setComplaints] = useState(complaintsData);

    const handleDeleteComplaint = (id) => {
        const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
        setComplaints(updatedComplaints);
    };

    const renderComplaintItem = ({ item }) => (
        <View style={{
            padding: 25, borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            flexDirection: 'row'
        }}>
            <Text style={styles.item} >{item.title}</Text>
            <Text style={styles.item} >{item.description}</Text>
            <Text style={styles.item} >{item.date}</Text>
            <View style={styles.iconcontainer} >
                <TouchableOpacity onPress={() => handleDeleteComplaint(item.id)}>
                    <MaterialCommunityIcons name='delete-outline' size={25} color='red' style={styles.deleteicon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('EditComplaint', { complaint: item })}>
                    <MaterialCommunityIcons name='pencil-outline' size={25} color='black' style={styles.editicon} />
                </TouchableOpacity>
            </View>

        </View>
    );
    

    return (
        <SafeAreaView style={styles.maincontainer} >
            <ScrollView>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.heading}>View Complaints</Text>
                </View>

                <FlatList
                    data={complaints}
                    renderItem={renderComplaintItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.container}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default OICViewComplaints;

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
        textAlign: 'center'
    },

    iconcontainer: {
        flexDirection: "row",
        left: 160,
        alignItems: "center"
    },

    deleteicon: {
        paddingRight: 10
    },

    editicon: {
        paddingRight: 10
    }

})