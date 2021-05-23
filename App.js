import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"

import Past from './app/screens/past';
import Upcoming from './app/screens/upcoming';
import Appointment from './app/screens/appointment';

const Stack = createDrawerNavigator();

export default function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="appointment" drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
        backgroundColor: "white",
        width: 0
      }} >
        <Stack.Screen name="appointment">{(props) => <Appointment {...props} />}</Stack.Screen>
        <Stack.Screen name="upcoming">{(props) => <Upcoming {...props} />}</Stack.Screen>
        <Stack.Screen name="past">{(props) => <Past {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

