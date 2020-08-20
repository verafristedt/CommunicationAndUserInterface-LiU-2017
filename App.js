import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Floor from './Floor';
import HomeScreen from './HomeScreen';

Text.defaultProps.allowFontScaling = false;

export default SimpleApp = StackNavigator({

  Home: { screen: HomeScreen },

  Floor: {screen: Floor},

}, navigationOptions={ headerMode:'screen',});
