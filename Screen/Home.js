import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, LogBox, StyleSheet, StatusBar, ScrollView, Dimensions, Image, Switch, CheckBox, TextInput } from 'react-native'
import { Card, Label } from 'native-base';
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux';
import { changeCount } from '../Redux/actions/actions';
import { bindActionCreators } from 'redux';
// LogBox.ignoreAllLogs();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = (props) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [address, setaddress] = useState('')
    const [mobile, setmMobile] = useState('')
    const [dob, setDob] = useState('')
    const [date, setdate] = useState(new Date())


    onSubmit = async () => {
        const { data } = props
        if (!first_name || !last_name || !address || !mobile || !dob) {
            alert("All fields are mandatory and can't be left blank")
            return
        }
        console.log(props.data)
        var form_data = {
            'first_name': first_name,
            'last_name': last_name,
            'address': address,
            'mobile_no': mobile,
            'dob': dob
        }
        data['data'].push(form_data)
        await changeCount(data)
        setFirstName('')
        setLastName('')
        setaddress('')
        setmMobile('')
        setDob('')
        props.navigation.navigate("Detail")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card style={{ flexDirection: 'column', padding: 5 }}>
                    <Label style={styles.label}>First Name *</Label>
                    <TextInput placeholder="First Name" style={styles.inputField} defaultValue={first_name}
                        onChangeText={(firstname) => setFirstName(firstname)} />

                    <Label style={styles.label}>Last Name *</Label>
                    <TextInput placeholder="Last Name" style={styles.inputField} defaultValue={last_name}
                        onChangeText={(lastname) => setLastName(lastname)} />

                    <Label style={styles.label}>Address *</Label>
                    <TextInput placeholder="Address" style={styles.inputField} defaultValue={address}
                        onChangeText={(address) => setaddress(address)} />

                    <Label style={styles.label}>Mobile no *</Label>
                    <TextInput placeholder="Mobile" style={styles.inputField} defaultValue={mobile}
                        onChangeText={(mobile) => setmMobile(mobile)} />

                    <Label style={styles.label}>Date Of birth*</Label>
                    <DatePicker
                        style={styles.inputField}
                        date={dob}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1947-05-01"
                        maxDate={date}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => setDob(date)}
                    />

                    <TouchableOpacity onPress={() => onSubmit()}
                        style={{ marginTop: 5, backgroundColor: '#00CED1', alignContent: 'stretch', borderRadius: 9 }}>
                        <Text style={{ textAlign: 'center', color: 'white', padding: 10, fontWeight: 'bold' }}>Submit</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        </View>
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

    inputField: {
        height: 40,
        width: '100%',
        borderRadius: 9,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "flex-start"
    },

});

const mapStateToProps = state => ({
    data: state.count,

});

const ActionCreators = Object.assign(
    {},
    changeCount,
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)