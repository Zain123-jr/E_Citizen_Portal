import React from "react";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";



import { Formik } from "formik";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({

    reason: Yup.string()        
        .required('Reason Required'),

    mobile: Yup.string()
        .required('Mobile Number Required'),

    cnic: Yup.string()
        .min(13)
        .matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format')
        .required('Enter Required'),

    email: Yup.string()
        .email('Invalid email')
        .required('Valid Email Required'),

    message: Yup.string()
        .required('Please enter your message'),


});

const ContactUs = ({ navigation }) => {

    const handleSubmit = () => {
        alert('Form Submit Successfully')        
    }

    return (

        <Formik initialValues={{
            reason: '',
            mobile: '',
            cnic: '',
            email: '',
            message: '',
        }}

            validationSchema={ContactSchema}

        >

            {({ values, errors, touched, handleChange, setFieldTouched, isValid }) => (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={styles.formContainer}>

                            <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }} >
                                <Picker
                                    style={{
                                        left: -18,
                                        top: 8,
                                        color: 'black',                                        
                                    }}
                                    selectedValue={values.reason}
                                    onValueChange={handleChange('reason')}
                                    onBlur={() => setFieldTouched('reason')}
                                >
                                    <Picker.Item style={styles.item} label="Pick a Reason" value="" />
                                    <Picker.Item style={styles.item} label="Password Reset Issue" value="Password Reset Issue" />

                                    <Picker.Item style={styles.item} label="Password Reset Code not Recieved" value="Password Reset Code not Recieved" />

                                    <Picker.Item style={styles.item} label="Change My CNIC" value="Password Change My CNIC" />

                                    <Picker.Item style={styles.item} label="Mobile App Bug Report" value="Mobile App Bug Report" />

                                </Picker>                                
                                {touched.reason && errors.reason && (
                                    <Text style={styles.errorText}>{errors.reason}</Text>
                                )}
                            </View>

                            <View style={{ flexDirection: "row" }} >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mobile:"
                                    placeholderTextColor='black'
                                    keyboardType="numeric"
                                    value={values.mobile}
                                    onChangeText={handleChange('mobile')}
                                    onBlur={() => setFieldTouched('mobile')}
                                />                                
                                {touched.mobile && errors.mobile && (
                                    <Text style={styles.errorText} >{errors.mobile}</Text>
                                )}
                            </View>

                            <View style={{ flexDirection: "row" }} >
                                <TextInput
                                    style={styles.input}
                                    placeholder="CNIC"
                                    placeholderTextColor='black'
                                    keyboardType="numeric"
                                    value={values.cnic}
                                    onChangeText={handleChange('cnic')}
                                    onBlur={() => setFieldTouched('cnic')}
                                />                                
                                {touched.cnic && errors.cnic && (
                                    <Text style={styles.errorText} >{errors.cnic}</Text>
                                )}
                            </View>

                            <View style={{ flexDirection: "row" }} >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor='black'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                />                            
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText} >{errors.email}</Text>
                                )}
                            </View>

                            <View style={{ flexDirection: "row" }} >
                                <TextInput
                                    style={styles.messagebox}
                                    placeholder="Enter Details Here!"
                                    placeholderTextColor='black'
                                    multiline={true}
                                    numberOfLines={6}
                                    value={values.message}
                                    onChangeText={handleChange('message')}
                                    onBlur={() => setFieldTouched('message')}
                                />                                

                                {touched.message && errors.message && (
                                    <Text style={styles.errormessage} >{errors.message}</Text>
                                )}
                            </View>

                            <TouchableOpacity
                                onPress={handleSubmit}
                                disabled={!isValid}
                                style={[
                                    styles.button,
                                    { backgroundColor: isValid ? '#539165' : '#A5C9CA' },
                                ]} >
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: "center",
        textAlign: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize: 30,        
    },
   
    formContainer: {
        backgroundColor: 'transparent',
        padding: 20,
        marginTop: 34,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 5,
        width: '95%',
        marginLeft: 10
    },

    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 20,        
        marginBottom: 12,
        paddingBottom: 8,
        color: 'black',        
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
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
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
    },  

    btn: {
        borderColor: 'green',
        backgroundColor: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },

    btntext: {
        fontSize: 15,
        color: '#9DC08B',
        fontWeight: '700',
        paddingRight: 5,
    },
    
    item: {
        fontSize: 14,
    }
});






