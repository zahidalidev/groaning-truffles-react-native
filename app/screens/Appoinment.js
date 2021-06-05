import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Button, TextInput, StyleSheet, StatusBar } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import contstants from "expo-constants"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker"
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppBar from '../components/AppBar';
import { colors } from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppTextButton from "../components/AppTextButton"

export default function Appoinment({ navigation }) {

    const [name, setName] = useState("");
    const [typeOfAppointment, setTypeOfAppointment] = useState('')
    const [morning, setMorning] = useState(true)
    const [morningSlot1, setMorningSlot1] = useState(true)
    const [morningSlot2, setMorningSlot2] = useState(false)

    const [evening, setEvening] = useState(false)
    const [eveningSlot1, setEveningSlot1] = useState(true)
    const [eveningSlot2, setEveningSlot2] = useState(false)
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const timeSlots = {
        morningSlot1: '8:30 to 9:30',
        morningSlot2: '10:00 to 11:00',
        eveningSlot1: '5:30 to 6:30',
        eveningSlot2: '8:30 to 9:30'
    }

    const items = [
        { label: "Maternity", value: "maternity" },
        { label: "General", value: "general" },
        { label: "Dentist", value: "dentist" }
    ]

    const iconComponent = () => {
        return null
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const handleBooking = () => {

        const morningTime = morningSlot1 ? 'morningSlot1' : 'morningSlot2';
        const eveningTime = eveningSlot1 ? 'eveningSlot1' : 'eveningSlot2';

        const body = {
            id: 1,
            Name: name,
            DoctorName: "Dr.Dhepe",
            typeOfAppointment,
            place: "New York",
            Date: date.toDateString(),
            time: morning ? timeSlots[morningTime] : timeSlots[eveningTime],
            Slot: morning ? "Morning" : "Evening",
            status: "appointed"
        };

        navigation.navigate('upcomingAndPast', { item: body })
    }


    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBar backgroundColor={colors.primary} />
            <AppBar navigation={navigation} />

            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ marginTop: RFPercentage(6) }} >
                    <Text style={{ fontSize: RFPercentage(3.5) }} >Add Appointment</Text>
                </View>

                <View style={{ marginTop: RFPercentage(4) }} >
                    <AppTextInput
                        placeHolder="Patient Name"
                        value={name}
                        onChange={(text) => setName(text)}
                        width="90%"
                        border={true}
                        borderWidth={1}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(4) }} >
                    <ReactNativeCrossPicker
                        modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                        mainComponentStyle={{ borderColor: colors.primary, backgroundColor: "white" }}
                        iconComponent={iconComponent}
                        items={items}
                        setItem={setTypeOfAppointment} selectedItem={typeOfAppointment}
                        placeholder="Select Appointment Type"
                        modalMarginTop={"50%"} // popup model margin from the top 
                        width="80%"
                    />
                </View>
                <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "80%" }} >
                    <View style={{ paddingBottom: RFPercentage(1.2) }} >
                        <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Select Appointment Date</Text>
                    </View>

                    <View>
                        <View style={{ borderColor: colors.primary, borderWidth: 1, padding: RFPercentage(1.4), paddingRight: 0, borderRadius: RFPercentage(1), width: "100%", height: RFPercentage(6), flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <TouchableOpacity style={{ width: Platform.OS === "ios" ? "80%" : "100%" }} onPress={() => setShow(true)}>
                                <Text style={{ fontSize: RFPercentage(2.2), color: colors.grey, width: "100%" }} >{date.toDateString()}</Text>
                            </TouchableOpacity>
                            {Platform.OS === "ios" ?
                                <TouchableOpacity style={{ width: "20%" }} onPress={() => setShow(true)}>
                                    <Text onPress={() => setShow(false)} style={{ fontSize: RFPercentage(2.2), color: colors.primary, width: "100%" }} >Done</Text>
                                </TouchableOpacity>
                                : null
                            }
                        </View>

                    </View>
                    {show && (
                        <DateTimePicker
                            style={{ width: 320, backgroundColor: "white" }}
                            testID="dateTimePicker"
                            value={date}
                            placeholderText="Select Appointment Date"
                            mode={"date"}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

                <View style={{ marginTop: RFPercentage(4), flexDirection: "column", alignItems: "flex-start", width: "80%" }} >
                    <View>
                        <Text style={{ fontSize: RFPercentage(2.2) }} >Please Select Morning/Evening</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), flexDirection: "row", width: "100%", justifyContent: "center" }} >

                        <Text style={{ fontSize: RFPercentage(2.2), marginTop: 7 }}>Morning</Text>
                        <RadioButton
                            selected={morning}
                            onPress={() => {
                                setMorning(true);
                                setEvening(false);
                            }}
                            color={colors.primary}
                        />
                        <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2), marginTop: 7 }}>Evening</Text>
                        <RadioButton
                            selected={evening}
                            onPress={() => {
                                setMorning(false);
                                setEvening(true);
                            }}
                            color={colors.primary}
                        />
                    </View>
                </View>

                <View style={{ marginTop: RFPercentage(3), flexDirection: "column", alignItems: "flex-start", width: "80%" }} >
                    <View>
                        <Text style={{ fontSize: RFPercentage(2.2) }} >Please Select Time Slot</Text>
                    </View>

                    {/* morning and evening slots */}
                    {morning ?
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", width: "100%", justifyContent: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2), marginTop: 7 }}>8:30 to 9:30</Text>
                            <RadioButton
                                selected={morningSlot1}
                                onPress={() => {
                                    setMorningSlot1(true);
                                    setMorningSlot2(false);
                                }}
                                color={colors.primary}
                            />
                            <Text style={{ marginLeft: RFPercentage(0.2), fontSize: RFPercentage(2), marginTop: 7 }}>10:00 to 11:00</Text>
                            <RadioButton
                                selected={morningSlot2}
                                onPress={() => {
                                    setMorningSlot1(false);
                                    setMorningSlot2(true);
                                }}
                                color={colors.primary}
                            />
                        </View>
                        :
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", width: "100%", justifyContent: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2), marginTop: 7 }}>5:30 to 6:30</Text>
                            <RadioButton
                                selected={eveningSlot1}
                                onPress={() => {
                                    setEveningSlot1(true);
                                    setEveningSlot2(false);
                                }}
                                color={colors.primary}
                            />
                            <Text style={{ marginLeft: RFPercentage(0.2), fontSize: RFPercentage(2), marginTop: 7 }}>8:30 to 9:30</Text>
                            <RadioButton
                                selected={eveningSlot2}
                                onPress={() => {
                                    setEveningSlot1(false);
                                    setEveningSlot2(true);
                                }}
                                color={colors.primary}
                            />
                        </View>
                    }
                </View>

                {/* Button */}
                <View style={{ marginTop: RFPercentage(4) }} >
                    <AppTextButton
                        onSubmit={() => handleBooking()}
                        name="Book Appointment"
                        buttonStyle={{ paddingRight: RFPercentage(1), paddingLeft: RFPercentage(1) }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 40,
        margin: 15,
        borderWidth: 3,
    },


});