// create the scan QR page with the code to enable user to scan the QR code and automatically be taken to the pay.js page

import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// create the page functionalities
 export default class Scan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        hasPermission: null,
        scanned: false,
        data: '',
        user: '',
        pass: '',
        amount: '',
        balance: '',
        };
    }
    // check the permission of the camera
    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }
    // scan the QR code and display the data
    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true, data: data });
        this.setState({ user: data.split(" ")[0] });
        this.setState({ pass: data.split(" ")[1] });
        this.setState({ amount: data.split(" ")[2] });
        this.setState({ balance: data.split(" ")[3] });
    }
    // display the data
    render() {
        const { hasPermission, scanned, data, user, pass, amount, balance } = this.state;
        if (hasPermission === null) {
            <Text>Requesting for camera permission</Text>;
        } else if (hasPermission === false) {
            <Text>No access to camera</Text>;
        }
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>User: {user}</Text>
                    <Text style={styles.text}>Password: {pass}</Text>
                    <Text style={styles.text}>Amount: {amount}</Text>
                    <Text style={styles.text}>Balance: {balance}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.container}>
                    <Button title="Go to next page" onPress={() => {
                        console.log("Button pressed");
                        this.props.navigation.navigate('Pay');
                    }
                    } />
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    
});


            
    
    
            