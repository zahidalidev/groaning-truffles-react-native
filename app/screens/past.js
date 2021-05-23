import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import data from '../../mydata.json';
export default function past() {

    const itemView = ({ item }) => {
        return (
            <View style={styles.listItems}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
                    <View style={{ paddingRight: 120, paddingBottom: 10 }}><Text>Date</Text></View>
                    <View style={{ paddingRight: 120, paddingBottom: 10 }}><Text>Time</Text></View>
                    <Text style={{ paddingRight: 15 }}>Doctor</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 5, paddingBottom: 10 }}>
                    <Text>{item.Date}</Text>
                    <Text>{item.Date}</Text>
                    <Text>{item.DoctorName}</Text>
                </View>

                <View style={{ borderBottomWidth: '1', borderBottomColor: 'black' }}></View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 5 }}>
                    <View style={{ paddingRight: 120, paddingBottom: 10 }}><Text>Appointment Type</Text></View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 5, paddingBottom: 10 }}>
                    <Text>{item.Date}</Text>
                    <Button title="Reschedule" style={{ height: 10, width: 50 }} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={itemView}

                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 30,

    },
    listItems: {
        margin: 10,
        backgroundColor: "#FFF",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10
    },
});