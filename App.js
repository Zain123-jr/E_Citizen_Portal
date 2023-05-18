import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComplaintsBottomNavigator from './src/components/navigation/ComplaintsBottomNavigator';
import Splash from './src/components/screens/Splash';
import Welcome from './src/components/screens/Welcome';
import Signup from './src/components/screens/Signup';
import Login from './src/components/screens/Login';
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
import CitizenPortal from './src/components/screens/CitizenModule/CitizenPortal';
import OICHomepage from './src/components/screens/OfficialModule/OIC/OICHomepage';
import OICDrawer from './src/components/navigation/OICDrawer';
import PoliceStationDrawer from './src/components/navigation/PoliceStationDrawer';
import OICComplaintsBottomNavigator from './src/components/navigation/OICComplaintsBottomNavigator';
import PoliceComplaintsBottomNavigator from './src/components/navigation/PoliceComplaintsBottomNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CitizenPortal" component={CitizenPortal} />
        <Stack.Screen name="OfficalPortal" component={OfficialPortal} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
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
        <Stack.Screen name="OICHomepage" component={OICDrawer} />
        <Stack.Screen
          name="PoliceStationHomepage"
          component={PoliceStationDrawer}
        />
        <Stack.Screen
          name="OICComplaintsBottomNavigator"
          component={OICComplaintsBottomNavigator}
        />
        <Stack.Screen
          name="PoliceComplaintsBottomNavigator"
          component={PoliceComplaintsBottomNavigator}
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
