import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllActivities from '../screens/AllActivities';
import SpecialActivities from '../screens/SpecialActivities';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllActivities"
        component={AllActivities}
        options={{
          tabBarLabel: 'All Activities',
          tabBarIcon: ({}) => (
            <FontAwesome name="dollar" size={24} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="SpecialActivities"
        component={SpecialActivities}
        options={{
          tabBarLabel: 'Special Activities',
          // Add your icon for Special Activities
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})