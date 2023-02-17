import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  useEffect(() => {
    messaging()
      .getToken(firebase.app(''))
      .then(x => console.log(x))
      .catch(e => console.log(e));
  }, []);
  return <></>;
};
export default App;
