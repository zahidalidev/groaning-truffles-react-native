import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"

import Past from './app/screens/past';
import UpcomingAndPast from './app/screens/upcoming';
import Appointment from './app/screens/appointment';

const Stack = createDrawerNavigator();

export default function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="upcomingAndPast" drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
        backgroundColor: "white",
        width: 0
      }} >
        <Stack.Screen name="appointment">{(props) => <Appointment {...props} />}</Stack.Screen>
        <Stack.Screen name="upcomingAndPast">{(props) => <UpcomingAndPast {...props} />}</Stack.Screen>
        <Stack.Screen name="past">{(props) => <Past {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

