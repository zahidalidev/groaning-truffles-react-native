import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from 'react-native-paper';

import { colors } from '../config/colors';

function AppTextButton({ name, onSubmit, width, height = RFPercentage(5.5), borderRadius = 10, backgroundColor = colors.primary, buttonStyle, textStyle }) {
    return (
        <Button width={width} color={backgroundColor} mode="contained" onPress={() => onSubmit()} style={{ height, borderRadius: borderRadius, justifyContent: "center", ...buttonStyle }} >
            <Text numberOfLines={1} style={{ color: "white", fontSize: RFPercentage(1.8), ...textStyle }} >{name}</Text>
        </Button >
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextButton;