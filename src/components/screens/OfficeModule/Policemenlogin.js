import React from "react";
import { ScrollView } from "react-native";
import { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Formik } from "formik";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

    email: Yup.string()
        .email('Invalid email')
        .required('Valid Email Required'),

    password: Yup.string()
        .min(8)
        .required('Password Required')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain minimum 8 characters'),

});

const PolicemenLogin = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true);

    return (

        <Formik initialValues={{
            email: '',
            password: '',
        }}

            validationSchema={LoginSchema}

        >

            {({ values, errors, touched, handleChange, setFieldTouched, isValid }) => (
                <SafeAreaView style={styles.container}>                   
                    <ImageBackground
                        style={styles.image}
                        source={require("../../../assets/login_bg.jpg")}
                    >
                        <ScrollView>
                            <View style={styles.formContainer}>
                                <Text style={styles.heading}>Login</Text>
                                <Text style={styles.description}>Please Login To Continue</Text>


                                <View style={{ flexDirection: "row" }} >
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        placeholderTextColor='white'
                                        autoCapitalize="none"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                    />
                                    <MaterialCommunityIcons name="account-circle-outline" size={30} style={styles.icon} />
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorText} >{errors.email}</Text>
                                    )}
                                </View>


                                <View style={{ flexDirection: "row" }} >
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        placeholderTextColor='white'
                                        secureTextEntry={hidePassword}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        onBlur={() => setFieldTouched('password')}
                                    />
                                    <View style={styles.eyeIconContainer}>
                                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                            <MaterialCommunityIcons
                                                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                                                size={25}
                                                color={hidePassword ? 'white' : 'white'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <MaterialCommunityIcons name="lock-outline" size={30} style={styles.icon} />
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorText} >{errors.password}</Text>
                                    )}
                                </View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('PolicemenHomepage')}
                                    disabled={!isValid}
                                    style={[
                                        styles.button,
                                        { backgroundColor: isValid ? '#539165' : '#A5C9CA' },
                                    ]} >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>

                                <View style={styles.extracontainer} >
                                    <Text style={styles.extra} >Did't have an account ?</Text>
                                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PolicemenSignup ')} >
                                        <Text style={styles.btntext} >Signup</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </ScrollView>

                    </ImageBackground>
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default PolicemenLogin;


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

    image: {
        flex: 1,
        width: "100%",
        resizeMode: 'cover',
    },

    formContainer: {
        backgroundColor: 'transparent',
        padding: 20,
        marginTop: 160,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 5,
        width: '95%',
        marginLeft: 10
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#EEE9DA',
    },

    description: {
        color: 'white',
        fontWeight: '400',
        marginBottom: 8,
        paddingTop: 8,
    },

    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 20,
        paddingLeft: 35,
        marginBottom: 20,
        paddingBottom: 8,
        color: 'white',
        fontWeight: '800',
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

    icon: {
        position: 'absolute',
        top: 19,
        color: 'white'
    },

    extracontainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 5,
        top: 10
    },

    extra: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
        paddingRight: 5,
        top: 10
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

    eyeIconContainer: {
        position: 'absolute',
        top: 20,
        left: 260,
        padding: 5,
    },

});


