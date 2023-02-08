import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/Index'
import { BaseNetwork } from './src/api/BaseNetwork';

const App = () => {

  useEffect(() => {
    
    let network = new BaseNetwork();

    network.getAll('/places')
    .then(res => {
      console.log('RES', res);
      
    })
  
    
  }, [])
  


  return (<>
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  </>
  )
}

export default App