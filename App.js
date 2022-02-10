import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { ImageBackground,BottomSheet,  ScrollView, Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);
const image = { uri: "/assets/background.png" };

//serve area 
const App = () => {
  return (
      <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode = "cover" style={styles.background}  >
    <View>
      <Text style={styles.title}>
        This is Our Tippy APP
      </Text>
      <Button
        title="Take us to home Page"
        // Upon press load the /src/home.js page 
      />
    </View>
    <Separator />
    <View>
     
      <Button
        title="Scan QR Code"
        color="#f194ff"
      />
    </View>  
    <Separator />
    <View>
    
      <Button
        title="Use Existing QR Code"
        disabled
      />
    </View>
    <Separator />
    <Separator>
    </Separator>
    <View>
      <Text style={styles.title}>
       Manage apps. Existing QR codes will display the here..
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Manage"
        />
        <Button
          title="Exit App"
        />
      </View>
    </View>
    </ImageBackground>
  </SafeAreaView>
  );
};

 // Css styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  export default App;