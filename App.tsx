import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/Index'

const App = () => {
  return (<>
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  </>
  )
}

export default App