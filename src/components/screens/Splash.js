import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import COLORS from '../consts/Colors';


class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
      fadeIn: new Animated.Value(0)
    };
  }


  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.state.fadeIn, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      })
    ]).start(() => {
      // Navigate to main screen after the animation is completed
      this.props.navigation.navigate('Welcome');
    });
  }

  render() {
    const rotation = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const fadeIn = {
      opacity: this.state.fadeIn
    };

    return (

      <View style={styles.container} >
        <ImageBackground style={styles.image_bg}
          source={require('../../assets/bg.jpg')} >
          <View style={styles.content} >
            <Animated.Image
              style={[styles.image, { transform: [{ rotate: rotation }] }, fadeIn]}
              source={require('../../assets/logo.jpg')}
            />
            <Text style={styles.heading} >E-Citizen Portal</Text>
          </View>
        </ImageBackground>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 35,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight:'800',
  },

  image: {
    width: 150,
    height: 150,
  },

  image_bg: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
});

export default Splash;

