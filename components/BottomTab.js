import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllActivities from '../screens/AllActivities';
import SpecialActivities from '../screens/SpecialActivities';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Colors from './Color'

const Tab = createBottomTabNavigator();

export default function Activities({ navigation}) {

  return (
    <Tab.Navigator style={styles.header}>
      <Tab.Screen
        name="AllActivities"
        component={AllActivities}
        options={{
          tabBarLabel: 'All Activities',
          tabBarIcon: ({ }) => (
            <FontAwesome name="dollar" size={24} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="SpecialActivities"
        component={SpecialActivities}
        options={{
          tabBarLabel: 'Special Activities',
          tabBarIcon: ({ }) => (
            <AntDesign name="exclamation" size={24} color="grey" /> // TODO: the color of icon becomes yellow when it is active
          ),

        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primaryPurpleColor,
    color: Colors.primaryWhiteColor,
  },
})