import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllActivities from '../screens/AllActivities';
import SpecialActivities from '../screens/SpecialActivities';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Colors from './Color'
import { Styles } from './Styles'

const Tab = createBottomTabNavigator();

export default function BottomTab({ navigation }) {

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: Styles.bottomTab,
      tabBarActiveTintColor: Colors.focusColorYellow,
    }}>
      <Tab.Screen
        name="AllActivities"
        component={AllActivities}
        options={{
          tabBarLabel: 'All Activities',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="dollar" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SpecialActivities"
        component={SpecialActivities}
        options={{
          tabBarLabel: 'Special Activities',
          tabBarIcon: ({ color }) => (
            <AntDesign name="exclamation" size={24} color={color} />
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