import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator1 from './Navigations/DrawerNavigator1';
import EscritosProvider from './Context/Context';

export default function App() {
  return (
    <EscritosProvider>
        <NavigationContainer>
          <DrawerNavigator1/>
      </NavigationContainer>
    </EscritosProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
