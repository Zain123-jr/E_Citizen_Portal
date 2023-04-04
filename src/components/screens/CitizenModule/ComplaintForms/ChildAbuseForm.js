import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import { Picker } from "@react-native-picker/picker";
import { Formik } from 'formik';
import * as Yup from 'yup';


const ChildAbuseFormSchema = Yup.object().shape({

    subject: Yup.string()
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Minimum 5 characters'),

    category: Yup.string()
        .required('Category Required'),

    complaint_details: Yup.string()
        .required('Required Complaint Details'),

    complaint_location: Yup.string()
        .required('Required Complaint location'),

    province: Yup.string()
        .required('Province Required'),

    district: Yup.string()
        .required('District Required'),

    tehsil: Yup.string()
        .required('Tehsil Required'),

});


const ChildAbuseForm = ({ navigation }) => {

    function Submit() {
        Alert.alert('Complaint Submit Successfully')
    }

    return (
        <SafeAreaView style={styles.maincontainer} >
            <ScrollView>

                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.navigate('CitizenComplaints')} >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.heading}>New Compalaint</Text>
                </View>

                <View>
                    <Formik initialValues={{
                        subject: '',
                        category: '',
                        complaint_details: '',
                        complaint_location: '',
                        province: '',
                        district: '',
                        tehsil: '',
                    }}

                        validationSchema={ChildAbuseFormSchema}

                    >

                        {({ values, errors, touched, handleChange, setFieldTouched, isValid }) => (
                            <SafeAreaView style={styles.container}>
                                <ScrollView>
                                    <View style={styles.formContainer}>

                                        <View style={{ flexDirection: "row" }} >
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Enter Subject"
                                                placeholderTextColor='black'
                                                autoCapitalize="none"
                                                value={values.subject}
                                                onChangeText={handleChange('subject')}
                                                onBlur={() => setFieldTouched('subject')}
                                            />
                                            {touched.subject && errors.subject && (
                                                <Text style={styles.errorText} >{errors.subject}</Text>
                                            )}
                                        </View>

                                        <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }} >
                                            <Picker
                                                style={{
                                                    left: -10,
                                                    top: 8,
                                                    color: 'black',
                                                }}
                                                selectedValue={values.category}
                                                onValueChange={handleChange('category')}
                                                onBlur={() => setFieldTouched('category')}
                                            >
                                                <Picker.Item style={styles.item} label="Select category" value="" />
                                                <Picker.Item style={styles.item} label="Child Neglect" value="Child Neglect" />
                                                <Picker.Item style={styles.item} label="Sexual Abuse" value="Sexual Abuse" />
                                                <Picker.Item style={styles.item} label="Child Marriage" value="Child Marriage" />
                                                <Picker.Item style={styles.item} label="Child Pornography" value="Child Pornography" />
                                            </Picker>

                                            {touched.category && errors.category && (
                                                <Text style={styles.errorText}>{errors.category}</Text>
                                            )}
                                        </View>

                                        <View style={{ flexDirection: "row" }} >
                                            <TextInput
                                                style={styles.messagebox}
                                                placeholder="Enter Compalaint Details Here!"
                                                placeholderTextColor='black'
                                                multiline={true}
                                                numberOfLines={6}
                                                value={values.complaint_details}
                                                onChangeText={handleChange('complaint_details')}
                                                onBlur={() => setFieldTouched('complaint_details')}
                                            />

                                            {touched.complaint_details && errors.complaint_details && (
                                                <Text style={styles.errormessage}>{errors.complaint_details}</Text>
                                            )}
                                        </View>

                                        <View style={{ flexDirection: "row" }} >
                                            <TextInput
                                                style={styles.messagebox}
                                                placeholder="Enter Compalaint Address Here!"
                                                placeholderTextColor='black'
                                                multiline={true}
                                                numberOfLines={6}
                                                value={values.complaint_location}
                                                onChangeText={handleChange('complaint_location')}
                                                onBlur={() => setFieldTouched('complaint_location')}
                                            />

                                            {touched.complaint_location && errors.complaint_location && (
                                                <Text style={styles.errormessage}>{errors.complaint_location}</Text>
                                            )}
                                        </View>

                                        <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, marginBottom: 20, marginTop: 20 }} >
                                            <Picker
                                                style={{
                                                    left: -10,
                                                    top: 8,
                                                    color: 'black',
                                                }}
                                                selectedValue={values.province}
                                                onValueChange={handleChange('province')}
                                                onBlur={() => setFieldTouched('province')}
                                            >
                                                <Picker.Item style={styles.item} label="Select Province" value="" />
                                                <Picker.Item style={styles.item} label="Punjab" value="Punjab" />
                                            </Picker>

                                            {touched.province && errors.province && (
                                                <Text style={styles.errorText}>{errors.province}</Text>
                                            )}
                                        </View>

                                        <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, marginBottom: 10, marginTop: 20 }} >
                                            <Picker
                                                style={{
                                                    left: -10,
                                                    top: 8,
                                                    color: 'black',
                                                }}
                                                selectedValue={values.district}
                                                onValueChange={handleChange('district')}
                                                onBlur={() => setFieldTouched('district')}
                                            >
                                                <Picker.Item style={styles.item} label="Select District" value="" />
                                                <Picker.Item style={styles.item} label="Sargodha" value="Sargodha" />
                                            </Picker>

                                            {touched.district && errors.district && (
                                                <Text style={styles.errorText}>{errors.district}</Text>
                                            )}
                                        </View>

                                        <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, marginBottom: 20, marginTop: 20 }} >
                                            <Picker
                                                style={{
                                                    left: -10,
                                                    top: 8,
                                                    color: 'black',
                                                }}
                                                selectedValue={values.tehsil}
                                                onValueChange={handleChange('tehsil')}
                                                onBlur={() => setFieldTouched('tehsil')}
                                            >
                                                <Picker.Item style={styles.item} label="Select Tehsil" value="" />
                                                <Picker.Item style={styles.item} label="KotMomin" value="KotMomin" />
                                                <Picker.Item style={styles.item} label="Silanwali" value="Silanwali" />
                                                <Picker.Item style={styles.item} label="Sahiwal" value="Sahiwal" />
                                                <Picker.Item style={styles.item} label="Bhalwal" value="Bhalwal" />
                                            </Picker>

                                            {touched.tehsil && errors.tehsil && (
                                                <Text style={styles.errorText}>{errors.tehsil}</Text>
                                            )}
                                        </View>

                                        <TouchableOpacity
                                            onPress={() => Submit()}
                                            disabled={!isValid}
                                            style={[
                                                styles.button,
                                                { backgroundColor: isValid ? '#539165' : '#A5C9CA' },
                                            ]} >
                                            <Text style={styles.buttonText}>Sumbit Complaint</Text>
                                        </TouchableOpacity>



                                    </View>
                                </ScrollView>
                            </SafeAreaView>
                        )}
                    </Formik>
                </View>

            </ScrollView>
        </SafeAreaView >
    )
}

export default ChildAbuseForm;

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

    formContainer: {
        backgroundColor: 'transparent',
        padding: 20,
        marginTop: 34,
        borderRadius: 10,
        width: '95%',
        marginLeft: 10,
    },

    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 20,
        paddingLeft: 5,
        marginBottom: 50,
        paddingBottom: 8,
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%'
    },

    messagebox: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 20,
        marginBottom: 20,
        paddingLeft: 5,
        paddingBottom: 8,
        color: 'black',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%'
    },

    button: {
        padding: 15,
        top: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    errorText: {
        color: '#E0144C',
        fontWeight: '600',
        position: 'absolute',
        top: 60,
    },

    errormessage: {
        color: '#E0144C',
        fontWeight: '600',
        position: 'absolute',
        top: 132,
        left: 4
    },

    item: {
        fontSize: 18,
    },
})