import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import jsonData from '../../mydata.json';
import Card from '../components/Card';
import { colors } from '../config/colors';

export default function upcoming() {
    const [upComming, setUpComming] = useState(true);
    const [data, setData] = useState([{ blank: true, id: 1 }]);

    useEffect(() => {
        setData(jsonData)
    }, [])

    const handleCancel = () => {
        console.log("hi")
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBar backgroundColor={colors.primary} />

            {/* AppBar */}
            <Appbar.Header style={{ backgroundColor: colors.primary }} >
                <Appbar.BackAction color={colors.white} />
                <Appbar.Content style={{ position: "absolute", left: "30%" }} titleStyle={{ fontSize: RFPercentage(3) }} color={colors.white} title="Appointments" />
                <Appbar.Action size={RFPercentage(3.5)} style={{ position: "absolute", right: "2%" }} color={colors.white} icon="plus" />
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
                        data={data.length === 0 ? [{ blank: true, id: 1 }] : data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, i }) =>
                            <View style={{
                                margin: RFPercentage(1),
                                marginBottom: RFPercentage(1.5),
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
                                <Card buttonText="Cancel" onHandleCancel={() => handleCancel()} item={item} />
                            </View>
                        }
                    />
                </View>
                :
                <View style={{ flex: 1, alignItems: 'center', marginTop: RFPercentage(2) }}>
                    <FlatList
                        data={data.length === 0 ? [{ blank: true, id: 1 }] : data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, i }) =>
                            <View style={{
                                margin: RFPercentage(1),
                                marginBottom: RFPercentage(1.5),
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
                                <Card buttonText="Rescedule" onHandleCancel={() => handleCancel()} item={item} />
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