
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './scr/screens/HomeScreen.js';
import LoginScreen from './scr/screens/LoginScreen.js';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "HomeScreen" >

      <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
      <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
      
   </Stack.Navigator>
  </NavigationContainer>
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
