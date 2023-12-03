import React from 'react';
import Login from './screens/Login';
import Services from './screens/All_Services';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}