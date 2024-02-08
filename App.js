import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Start from './screens/Start';
import AddAnActivity from './screens/AddAnActivity';
import SpecialActivities from './screens/SpecialActivities';
import AllActivities from './screens/AllActivities';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="AddAnActivity" component={AddAnActivity} />
        <Stack.Screen name="SpecialActivities" component={SpecialActivities} />
        <Stack.Screen name="AllActivities" component={AllActivities} />
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
