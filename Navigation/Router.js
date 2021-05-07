import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, Dimensions, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CardItem, Card, Icon, Container, Content, Label } from 'native-base';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from '../Screen/Home';
import Details from '../Screen/Detail';

const Stack = createStackNavigator();


function Navigation({ navigation }) {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitleStyle: {
                        color: 'black'
                    },
                }}  >

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }} initial={true} />
                <Stack.Screen name="Detail" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;