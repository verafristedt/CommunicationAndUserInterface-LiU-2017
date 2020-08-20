import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  Description: {
    color: '#000000',
    fontSize: 12,
    margin: 30,
  },

  ChooseFloor: {
  	color: '#000000',
  	fontSize: 25,
    margin: 30,
    marginBottom: 10,
  },

  FloorButton: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 25,
    width: 75,
    textAlign: 'center',
    margin: 10,
    padding: 5,
    borderColor: '#00b8e7',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#00b8e7',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {width: -5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,

  },

  FloorButtonPressed: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 25,
    width: 75,
    textAlign: 'center',
    margin: 10,
    padding: 5,
    borderColor: '#00b8e7',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#00b8e7',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {width: -5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },

  SearchButton: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 12,
    width: 50,
    textAlign: 'center',
    margin: 10,
    padding: 5,
    borderColor: '#00b8e7',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#00b8e7',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {width: -5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },

  SearchLabel: {
    margin: 10,
    fontSize: 15,
  },

  SearchView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },

  Input: {
    textAlign: 'center',
    height: 25,
    width: 100,
    borderColor: '#cecece',
    borderWidth: 1,
    borderRadius: 5,
  },

  Image: {
  	width: 200,
  	height: 100,
  	resizeMode:'contain',
  },

  ImageView: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center', 
    backgroundColor: '#e0e0e0',
  },

  ContentContainer: {
    height: height, 
    width: width, 
    alignItems:'center', 
    justifyContent:'center'
  },

  BackgroundImage: {
    resizeMode: 'contain',
    width: width,
    height: height,
  }, 

  bottomElements: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    height: 50,
  },

  Icon: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
  },

    InputFloor: {
    textAlign: 'center',
    height: 25,
    width: 100,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },

  SearchBar: {
    backgroundColor: 'transparent',
    marginLeft: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },

  TopElement: {
    position: 'absolute',
    top: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 25,
    width: 75,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  TopIcon: {
    position: 'absolute',
    top: 25,
    right: 50,
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
  }

});