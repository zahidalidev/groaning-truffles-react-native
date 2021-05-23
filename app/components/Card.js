import React from 'react';
import { View, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppTextButton from './AppTextButton';
import { colors } from '../config/colors';

function Card({ item, onHandleCancel, buttonText }) {

    return (
        <>
            <View style={{ flexDirection: "row", padding: RFPercentage(2) }}>
                <View style={{ width: "33%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 5 }}>
                    <Text style={{ marginBottom: 10, color: colors.grey, fontSize: RFPercentage(2.4) }} >Date</Text>
                    <Text style={{ fontSize: RFPercentage(1.8) }} >{item.Date}</Text>
                </View>
                <View style={{ width: "34%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 5 }}>
                    <Text style={{ marginBottom: 10, color: colors.grey, fontSize: RFPercentage(2.4) }} >Time</Text>
                    <Text style={{ fontSize: RFPercentage(1.8) }} >{item.time}</Text>

                </View>
                <View style={{ width: "33%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 5 }}>
                    <Text style={{ marginBottom: 10, color: colors.grey, fontSize: RFPercentage(2.4) }} >Doctor</Text>
                    <Text style={{ fontSize: RFPercentage(1.8) }} >{item.DoctorName}</Text>
                </View>
            </View>
            <View style={{ width: "100%", height: 1, opacity: 0.3, backgroundColor: colors.mediumGrey }} ></View>

            <View style={{ flexDirection: "row", padding: RFPercentage(2) }}>
                <View style={{ width: "40%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 5 }}>
                    <Text numberOfLines={1} style={{ marginBottom: 10, color: colors.grey, fontSize: RFPercentage(2.2) }} >Appointment Type</Text>
                    <Text style={{ fontSize: RFPercentage(1.8) }} >{item.typeOfAppointment}</Text>
                </View>
                <View style={{ width: "25%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 5 }}>
                    <Text style={{ marginBottom: 10, color: colors.grey, fontSize: RFPercentage(2.2) }} >Place</Text>
                    <Text style={{ fontSize: RFPercentage(1.8) }} >{item.place}</Text>

                </View>
                <View style={{ width: "32%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <AppTextButton backgroundColor={buttonText === 'Cancel' ? colors.primary : colors.red} onSubmit={() => onHandleCancel()} borderRadius={5} name={buttonText} height={RFPercentage(4.2)} />
                </View>
            </View>
        </>
    );
}


export default Card;