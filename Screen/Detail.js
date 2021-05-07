import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, View, StyleSheet, StatusBar, ScrollView, Dimensions, Image, Switch, CheckBox, TextInput } from 'react-native'
import { CardItem, Card, } from 'native-base';
import { connect } from 'react-redux';
import { saveData } from '../Redux/actions/actions';
import { bindActionCreators } from 'redux';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Details = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(props.data['data'])
        setData(props.data['data'])
    }, [])

    const cardView = (data, index) => {
        console.log("data from cacrdview", data)
        return (
            <Card key={index} style={{ flexDirection: "column" }}>
                <CardItem style={{ flexDirection: "column" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{data['first_name'] + '   ' + data['last_name']}</Text>
                    <Text>{data['address']}</Text>
                    <Text>{data['mobile_no']}</Text>
                    <Text>{data['dob']}</Text>
                </CardItem>
            </Card>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ flexGrow: 1, width: '100%', flexDirection: 'column' }}
                initialNumToRender={data.length}
                data={data}
                renderItem={({ item, index }) => {
                    return (cardView(item, index))
                }}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    label: {
        padding: 5
    },

});

const mapStateToProps = state => ({
    data: state.count,
});

const ActionCreators = Object.assign(
    {},
    saveData,
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details)