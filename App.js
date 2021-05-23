import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { LogBox } from "react-native";
import UpcomingAndPast from './app/screens/UpcomingAndPast';
import Appointment from './app/screens/Appoinment';

LogBox.ignoreAllLogs();

const Stack = createDrawerNavigator();

export default function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="upcomingAndPast" drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
        backgroundColor: "white",
        width: 0
      }} >
        <Stack.Screen initialParams={{ item: [] }} name="appointment">{(props) => <Appointment {...props} />}</Stack.Screen>
        <Stack.Screen initialParams={{ item: [] }} name="upcomingAndPast">{(props) => <UpcomingAndPast {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

