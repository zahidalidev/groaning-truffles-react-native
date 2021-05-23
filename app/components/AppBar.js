import { Appbar } from 'react-native-paper';
import React from 'react';
import { colors } from '../config/colors';

function AppBar({ navigation }) {
    return (
        <Appbar.Header style={{ backgroundColor: colors.primary }} >
            <Appbar.Content color="white" title="Groaning Truffles" />
            <Appbar.Content onPress={() => navigation.navigate('upcomingAndPast', { item: [] })} style={{ position: "absolute", right: 5 }} color="white" title="All Appointments" />
        </Appbar.Header>
    );
}


export default AppBar;