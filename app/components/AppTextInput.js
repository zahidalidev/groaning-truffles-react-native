import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colors } from "../config/colors"

function AppTextInput({ borderWidth = 0, placeHolder, value, onChange, width = "100%", editable = true, startEdit, endEdit, border = false }) {

    return (
        <View style={{
            backgroundColor: "white", borderRadius: RFPercentage(1.2),
            width: width, alignItems: 'flex-start', justifyContent: 'center',
            borderWidth: borderWidth, borderColor: colors.primary, height: RFPercentage(6)
        }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >

                <TextInput style={{ color: colors.grey, padding: RFPercentage(1), width: "90%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    value={value}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextInput;