// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';

// const firebaseConfig = {
//   // Your Firebase project configuration object goes here
//   apiKey: 'AIzaSyCSoL-BNT1dGlaiO7NUNllM5YrjP0WamHA',
//   authDomain: 'crime-reporting-system-9fa03.firebaseapp.com',
//   databaseURL:
//     'https://crime-reporting-system-9fa03-default-rtdb.firebaseio.com',
//   projectId: 'crime-reporting-system-9fa03',
//   storageBucket: 'crime-reporting-system-9fa03.appspot.com',
//   messagingSenderId: '233826844392',
//   appId: '1:233826844392:web:793ef6e71907504b48135d',
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import firebase from 'firebase/compat';
import 'firebase/compat/auth';

const firebaseConfig = {
  // Your Firebase project configuration object goes here
  apiKey: 'AIzaSyCSoL-BNT1dGlaiO7NUNllM5YrjP0WamHA',
  authDomain: 'crime-reporting-system-9fa03.firebaseapp.com',
  databaseURL:
    'https://crime-reporting-system-9fa03-default-rtdb.firebaseio.com',
  projectId: 'crime-reporting-system-9fa03',
  storageBucket: 'crime-reporting-system-9fa03.appspot.com',
  messagingSenderId: '233826844392',
  appId: '1:233826844392:web:793ef6e71907504b48135d',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const roles = {
  citizen: 'Citizen',
  oic: 'OIC',
  policestation: 'Police HQ',
};
