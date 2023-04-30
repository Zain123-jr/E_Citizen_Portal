import React from 'react';
import {ScrollView} from 'react-native';
import {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import '../../../../../FirebaseConfig';
import auth from '@react-native-firebase/auth';

const OICLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = async () => {
    //to autheticate oic
    if (email == '') {
      alert('Enter Email');
    } else if (password == '') {
      alert('Enter Password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('Login Successful');
          navigation.navigate('OICHomepage');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  const handleResetPassword = async () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent successfully');
      })
      .catch(error => {
        alert('Error sending password reset email:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../../assets/login_bg.jpg')}>
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>OIC Login</Text>
            <Text style={styles.description}>Please Login To Continue</Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setPassword}
              />
              <View style={styles.eyeIconContainer}>
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}>
                  <MaterialCommunityIcons
                    name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    size={25}
                    color={hidePassword ? 'white' : 'white'}
                  />
                </TouchableOpacity>
              </View>
              <MaterialCommunityIcons
                name="lock-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity onPress={handleResetPassword}>
                <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                  Forget Password ?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.extracontainer}>
              <Text style={styles.extra}>Did't have an account ?</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('OICSignup')}>
                <Text style={styles.btntext}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OICLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    textAlign: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  image: {
    flex: 1,
    width: '100%',
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
    marginLeft: 10,
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
    width: '100%',
  },

  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: COLORS.primary,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: 'white',
  },

  extracontainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 5,
    top: 10,
  },

  extra: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
    paddingRight: 5,
    top: 10,
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
