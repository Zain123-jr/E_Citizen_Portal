import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../consts/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SecondButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
      <MaterialCommunityIcons  name='login' size={30} color={'white'} style={{marginRight:10}} />
        <Text style={style.title}>{title}</Text>        
      </View>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,   
    marginTop:40,    
    borderRadius: 50,
    flexDirection:'row',
    height: 60,
    width:'85%',  
    marginLeft:25, 
    borderRadius:50,  
    justifyContent: 'center',
    alignItems: 'center',    
  },
});

export default SecondButton;
