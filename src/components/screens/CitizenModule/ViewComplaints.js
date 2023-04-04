import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/Colors';

const ViewComplaints = ({ navigation }) => {

    const complaints = [
        { id: 1, title: 'Complaint 1' },
        { id: 2, title: 'Complaint 2' },
        { id: 3, title: 'Complaint 3' },
    ];

    return (
        <SafeAreaView style={styles.maincontainer} >
            <ScrollView>
                <View style={styles.head} >
                    <TouchableOpacity onPress={() => navigation.navigate('CitizenHome')} >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.heading} >View Complaints</Text>
                </View>

                <FlatList
                    data={complaints}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.container}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewComplaints;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    icon: {
        top: 20,
    },

    head: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 15,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    heading: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        top: -12
    },

    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    title: {
        fontSize: 16,
        color:'#000'
    },
})






