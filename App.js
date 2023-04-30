import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './src/components/navigation/BottomNavigator';
import ComplaintsBottomNavigator from './src/components/navigation/ComplaintsBottomNavigator';
import Splash from './src/components/screens/Splash';
import Welcome from './src/components/screens/Welcome';
import CitizenSignup from './src/components/screens/CitizenModule/CitizenSignup';
import CitizenLogin from './src/components/screens/CitizenModule/CitizenLogin';
import DrawerNavigator from './src/components/navigation/DrawerNavigator';
import TortureForm from './src/components/screens/CitizenModule/ComplaintForms/TortureForm';
import KidnappingForm from './src/components/screens/CitizenModule/ComplaintForms/KidnappinForm';
import KillingForm from './src/components/screens/CitizenModule/ComplaintForms/KillingForm';
import RobberyForm from './src/components/screens/CitizenModule/ComplaintForms/RobberyForm';
import RapeForm from './src/components/screens/CitizenModule/ComplaintForms/RapeForm';
import ChildAbuseForm from './src/components/screens/CitizenModule/ComplaintForms/ChildAbuseForm';
import MissingPersonForm from './src/components/screens/CitizenModule/ComplaintForms/MissingPersonForm';
import Profile from './src/components/screens/CitizenModule/Profile';
import Personal from './src/components/screens/CitizenModule/UpdateForms/Personal';
import OfficialPortal from './src/components/screens/OfficialModule/OfficialPortal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CitizenPortal" component={BottomNavigator} />
        <Stack.Screen name="OfficalPortal" component={OfficialPortal} />
        <Stack.Screen name="CitizenSignup" component={CitizenSignup} />
        <Stack.Screen name="CitizenLogin" component={CitizenLogin} />
        <Stack.Screen name="CitizenHome" component={DrawerNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen
          name="CitizenComplaints"
          component={ComplaintsBottomNavigator}
        />
        <Stack.Screen
          name="ViewComplaints"
          component={ComplaintsBottomNavigator}
        />
        <Stack.Screen name="Torture" component={TortureForm} />
        <Stack.Screen name="Kidnapping" component={KidnappingForm} />
        <Stack.Screen name="Killing" component={KillingForm} />
        <Stack.Screen name="Robbery" component={RobberyForm} />
        <Stack.Screen name="Rape" component={RapeForm} />
        <Stack.Screen name="ChildAbuse" component={ChildAbuseForm} />
        <Stack.Screen name="MissingPerson" component={MissingPersonForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
