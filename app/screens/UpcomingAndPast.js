import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import jsonData from '../../mydata.json';
import Card from '../components/Card';
import { colors } from '../config/colors';

export default function UpcomingAndPast(props) {
    const [upComming, setUpComming] = useState(true);
    const [upcomingData, setUpcomingData] = useState(jsonData);
    const [pastData, setPastData] = useState(jsonData);

    const addingApoinment = () => {
        try {
            let allData;
            if (props.route.params.item === []) {
                allData = jsonData;
            } else {
                allData = [...jsonData, props.route.params.item];
            }
            const upcoming = allData.filter(item => item.status === "appointed");
            const past = allData.filter(item => item.status === "cancelled");
            setUpcomingData(upcoming)
            setPastData(past)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        addingApoinment()
    }, [props.route.params])

    const handleCancel = (i) => {
        const oldData = [...upcomingData];
        const cancelledData = oldData.splice(i, 1);
        cancelledData.status === "cancelled";
        setUpcomingData(oldData);
        setPastData([...pastData, ...cancelledData])
    }

    const handleRescedule = (i) => {
        const oldPastData = [...pastData];
        const cancelledPastData = oldPastData.splice(i, 1);
        cancelledPastData.status === "appointed";
        setPastData(oldPastData);
        setUpcomingData([...pastData, ...cancelledPastData]);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBar backgroundColor={colors.primary} />

            {/* AppBar */}
            <Appbar.Header style={{ backgroundColor: colors.primary }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('appointment')} style={{ position: "absolute", left: "5%" }} >
                    <Text style={{ fontSize: RFPercentage(5), color: colors.white }} >{'<'}</Text>
                </TouchableOpacity>
                <Appbar.Content style={{ position: "absolute", left: "30%" }} titleStyle={{ fontSize: RFPercentage(3) }} color={colors.white} title="Appointments" />
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('appointment')} style={{ position: "absolute", right: "4%" }} >
                    <Text style={{ fontSize: RFPercentage(5), color: colors.white }} >+</Text>
                </TouchableOpacity>
            </Appbar.Header>

            {/* Upcoming/Past Buttons */}
            <View style={{ width: "100%", backgroundColor: colors.white, flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                <TouchableOpacity onPress={() => setUpComming(true)} activeOpacity={0.8} style={{ borderBottomColor: colors.primary, borderBottomWidth: upComming ? 3 : 0, width: "50%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, padding: RFPercentage(2), fontSize: RFPercentage(2.4), fontWeight: "bold" }} >Upcomming</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setUpComming(false)} activeOpacity={0.8} style={{ borderBottomColor: colors.primary, borderBottomWidth: upComming ? 0 : 3, width: "50%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, padding: RFPercentage(2), fontSize: RFPercentage(2.4), fontWeight: "bold" }} >Past</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Contaienrs */}
            {upComming ?
                <View style={{ flex: 1, alignItems: 'center', marginTop: RFPercentage(2) }}>
                    <FlatList
                        data={upcomingData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, i }) =>
                            <View style={{
                                margin: RFPercentage(1),
                                marginBottom: RFPercentage(2.2),
                                marginRight: RFPercentage(2),
                                backgroundColor: "white",
                                maxHeight: item.blank ? 0 : null,
                                shadowColor: '#b5b5b5',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.8,
                                shadowRadius: 3,
                                elevation: 7,
                                borderRadius: 10,
                                marginLeft: "5%",
                                width: "90%",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}>
                                <Card buttonText="Cancel" onHandleCancel={() => handleCancel(i)} item={item} />
                            </View>
                        }
                    />
                </View>
                :
                <View style={{ flex: 1, alignItems: 'center', marginTop: RFPercentage(2) }}>
                    <FlatList
                        data={pastData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, i }) =>
                            <View style={{
                                margin: RFPercentage(1),
                                marginBottom: RFPercentage(2.2),
                                marginRight: RFPercentage(2),
                                backgroundColor: "white",
                                maxHeight: item.blank ? 0 : null,
                                shadowColor: '#b5b5b5',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.8,
                                shadowRadius: 3,
                                elevation: 7,
                                borderRadius: 10,
                                marginLeft: "5%",
                                width: "90%",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}>
                                <Card buttonText="Rescedule" onHandleCancel={() => handleRescedule(i)} item={item} />
                            </View>
                        }
                    />
                </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,

    },
});