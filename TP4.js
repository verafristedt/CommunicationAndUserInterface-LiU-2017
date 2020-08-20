import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles.js';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({navigation}) => (

 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Home Screen</Text>
  <Button
      onPress={() => navigation.navigate('Details', {name : 'Vera'})}
      title="Go to details"
  />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Text>{name}</Text>//HUR SKRIVER JAG UT DET MEDSKICKADE NAMNET
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;