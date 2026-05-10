import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Password from './src/pages/Password';

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar backgroundColor="#8c92e6" barStyle="light-content" />
    <Routes/>
   </NavigationContainer>
  );
}
