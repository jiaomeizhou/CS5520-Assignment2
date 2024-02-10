import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Start from './screens/Start';
import AddAnActivity from './screens/AddAnActivity';
import SpecialActivities from './screens/SpecialActivities';
import AllActivities from './screens/AllActivities';
import BottomTab from './components/BottomTab';
import { ActivityProvider } from './components/ActivityContext';

// TODO: cancel the left top back label for AddAnActivity screen
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ActivityProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="AddAnActivity" component={AddAnActivity} options={
            { headerBackTitleVisible: false, }
          } />
          <Stack.Screen name="AllActivities" component={BottomTab} options={
            { headerShown: false }
          } />
          {/* <Stack.Screen name="SpecialActivities" component={BottomTab} /> */}
        </Stack.Navigator>

      </NavigationContainer>
    </ActivityProvider>
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
