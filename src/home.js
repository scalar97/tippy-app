// load the logo and take to the user to the scan page 

// add logo to the top left of the screen 
// add a button to take you to the scan page
 
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class home extends Component {
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
    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }
    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true, data: data });
        this.setState({ user: data.split(" ")[0] });
        this.setState({ pass: data.split(" ")[1] });
        this.setState({ amount: data.split(" ")[2] });
        this.setState({ balance: data.split(" ")[3] });
    }
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

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            width: 100,
            height: 100,
        },
        button: {
            marginTop: 20,
            padding: 10,
            backgroundColor: 'blue',
            color: 'white',
        },
    });

    