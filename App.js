import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './src/components/navigation/BottomNavigator';
import Splash from './src/components/screens/Splash';
import Welcome from './src/components/screens/Welcome';
import CitizenSignup from './src/components/screens/CitizenModule/CitizenSignup';
import CitizenLogin from './src/components/screens/CitizenModule/CitizenLogin';
import DrawerNavigator from './src/components/navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CitizenPortal" component={BottomNavigator} />
        <Stack.Screen name="CitizenSignup" component={CitizenSignup} />
        <Stack.Screen name="CitizenLogin" component={CitizenLogin} />
        <Stack.Screen name="CitizenHome" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




