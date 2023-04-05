import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import imgPlaceHolder from '../../../assets/defualt-Avatar.png'
import { Caption, Paragraph, Surface, Title } from 'react-native-paper'
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react'
import COLORS from '../../consts/Colors'
import { Formik } from "formik";
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';


const UpdateProfileSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Full Name Required'),
});

const Profile = ({ navigation, route }) => {

    const [profile, setProfile] = useState(null)

    const imagePick = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setProfile(image.path)
        });
    }

    return (

        <View style={styles.primarycontainer}>
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={profile ? { uri: profile } : imgPlaceHolder} />
                    <TouchableOpacity onPress={imagePick}
                        style={{ alignItems: 'flex-end', top: -10 }}>
                        <MaterialCommunityIcons name="plus-circle" size={30} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    primarycontainer: {
        flex: 1,
    },

    secondarycontainer: {
    },

    profileContainer: {
        flex: 0.8,
        marginTop: 20,
        alignItems: 'center',
    },

    imgContainer: {},

    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: COLORS.primary,
        borderWidth: 4,
    },
})


