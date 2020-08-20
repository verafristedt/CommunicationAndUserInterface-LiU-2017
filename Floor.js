import React from 'react';
import { Alert, Image, KeyboardAvoidingView, TextInput, Button, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import rooms from './rooms.json';
import roomsTP3 from './roomsTP3.json';
import roomsTP4 from './roomsTP4.json';
import roomsTP5 from './roomsTP5.json';
import styles from './styles.js';
import image3 from './img/TP3.png';
import { SearchBar , Icon } from 'react-native-elements';

export default class Floor extends React.Component {

  constructor() {
    super();
    this.state = {currentStyle: styles.FloorButton};
    }

  static navigationOptions = {
    title: 'YOLO', header: null,
  };

  submitSearch() {
    let text = this.state.text;
    const {navigate} = this.props.navigation;

    var fel = new Boolean(false);

    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i].name == text) {
        if(rooms[i].floor == 3){
          fel = true;
          navigate('Floor', {floor : rooms[i].floor, name : rooms[i].name})
        }
        else if(rooms[i].floor == 4){
          fel = true;
          navigate('Floor', {floor : rooms[i].floor, name : rooms[i].name})
        }
        else if(rooms[i].floor == 5){
          fel = true;
          navigate('Floor', {floor : rooms[i].floor, name : rooms[i].name})
        }
          //gotoFloor(rooms[i].floor, rooms[i].position);
          console.log(rooms[i].name + ', våning TP' + rooms[i].floor);
      }
    }
    if(fel == false){
        Alert.alert(
                'Kunde inte hitta sal',
                'Försök igen!',
              )
      }
  }

  render() {
    const { goBack } = this.props.navigation;
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
      
    if(params.floor == 3){
      return (

        <KeyboardAvoidingView style={styles.ImageView} behavior="padding">  
          <ScrollView maximumZoomScale={2} 
                      minimumZoomScale={1} 
                      contentContainerStyle={styles.ContentContainer} 
                      style={{flex: 1, width: '100%', }}>

            <Image  style={styles.BackgroundImage} source={image3}>
              {
                roomsTP3.map((room) => {

                  let imageText = {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    textAlign: 'center',
                    //paddingRight: 3,
                    //paddingTop: 3,
                    bottom: room.y,
                    left: room.x,
                    fontSize: 10,
                    lineHeight: 20 ,
                    borderColor: 'transparent',
                    borderWidth: 2,
                    borderRadius: 2,
                    width: 50,
                  };

                  if(room.name == params.name) {
                    imageText.borderColor = 'red';
                  }
                  
                  return <Text style= {imageText} key={room.name}> {room.name} </Text>;})
              }
            </Image>
          </ScrollView>

          <Text style = {styles.TopElement}>
            TP3
          </Text>

          <View style={styles.TopIcon}>
            <Icon
              type = 'entypo'
              name='help'
              underlayColor='grey'
              size= {20}
              raised
            />
          </View>

          <View style={styles.bottomElements}>
              <Icon
                style = {Icon}
                type = 'entypo'
                name='home'
                underlayColor = 'grey'
                size= {20}
                raised
                onPress={() => {goBack(), navigate('Home')}}
              />

            <View style={styles.SearchBar}>
              <TextInput
                style={styles.InputFloor}
                onChangeText={(text) => this.setState({text})}
                ellipsizeMode={'head'}
                placeholder="t.ex.TP53"
                autoCapitalize={'characters'}
                autoCorrect={false}
                onSubmitEditing={this.submitSearch.bind(this)}
              />

              <Icon
                type = 'entypo'
                name='magnifying-glass'
                underlayColor='grey'
                size= {20}
                raised
                onPress={() => this.submitSearch(this.state.text)}
              />

            </View>
          </View>

        </KeyboardAvoidingView>

      );
    }

    else if(params.floor == 4){
      return (

        <KeyboardAvoidingView style={styles.ImageView} behavior="padding"> 
          <ScrollView maximumZoomScale={2} 
                      minimumZoomScale={1} 
                      contentContainerStyle={styles.ContentContainer} 
                      style={{flex: 1, width: '100%', }}>

            <Image  style={styles.BackgroundImage} source={require('./img/TP4.png')}>
              {
                roomsTP4.map((room) => {

                  let imageText = {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    textAlign: 'center',
                    paddingRight: 3,
                    paddingTop: 3,
                    bottom: room.y,
                    left: room.x,
                    fontSize: 10,
                    lineHeight: 20,
                    borderColor: 'transparent',
                    borderWidth: 2,
                    borderRadius: 2,
                  };

                  if(room.name == params.name) {
                    imageText.borderColor = 'red';
                  }

                  return <Text style= {imageText} key={room.name}> {room.name} </Text>;})
              }
            </Image>
          </ScrollView>

          <Text style = {styles.TopElement}>
            TP4
          </Text>

          <View style={styles.TopIcon}>
            <Icon
              type = 'entypo'
              name='help'
              underlayColor='grey'
              size= {20}
              raised
            />
          </View>

          <View style={styles.bottomElements}>
              <Icon
                style = {Icon}
                type = 'entypo'
                name='home'
                underlayColor = 'grey'
                size= {20}
                raised
                onPress={() => {goBack(), navigate('Home')}}
              />

            <View style={styles.SearchBar}>
              <TextInput
                style={styles.InputFloor}
                onChangeText={(text) => this.setState({text})}
                ellipsizeMode={'head'}
                placeholder="t.ex.TP53"
                autoCapitalize={'characters'}
                autoCorrect={false}
                onSubmitEditing={this.submitSearch.bind(this)}
              />

              <Icon
                type = 'entypo'
                name='magnifying-glass'
                underlayColor='grey'
                size= {20}
                raised
                onPress={() => this.submitSearch(this.state.text)}
              />

            </View>
          </View>

        </KeyboardAvoidingView>
      );
    }

    else if(params.floor == 5){
      return ( 
        <KeyboardAvoidingView style={styles.ImageView} behavior="padding"> 
          <ScrollView maximumZoomScale={2} 
                      minimumZoomScale={1} 
                      contentContainerStyle={styles.ContentContainer} 
                      style={{flex: 1, width: '100%', }}>

            <Image  style={styles.BackgroundImage} source={require('./img/TP5.png')}>
              {
                roomsTP5.map((room) => {
                  
                  let imageText = {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    textAlign: 'center',
                    paddingRight: 3,
                    paddingTop: 3,
                    bottom: room.y,
                    left: room.x,
                    fontSize: 10,
                    lineHeight: 20,
                    borderColor: 'transparent',
                    borderWidth: 2,
                    borderRadius: 2,
                  };

                  if(room.name == params.name) {
                    imageText.borderColor = 'red';
                  }

                  return <Text style= {imageText} key={room.name}> {room.name} </Text>;})
              }
            </Image>
          </ScrollView>

          <Text style = {styles.TopElement}>
            TP5
          </Text>

          <View style={styles.TopIcon}>
            <Icon
              type = 'entypo'
              name='help'
              underlayColor='grey'
              size= {20}
              raised
            />
          </View>

          <View style={styles.bottomElements}>
              <Icon
                style = {Icon}
                type = 'entypo'
                name='home'
                underlayColor = 'grey'
                size= {20}
                raised
                onPress={() => {goBack(), navigate('Home')}}
              />

            <View style={styles.SearchBar}>
              <TextInput
                style={styles.InputFloor}
                onChangeText={(text) => this.setState({text})}
                ellipsizeMode={'head'}
                placeholder="t.ex.TP53"
                autoCapitalize={'characters'}
                autoCorrect={false}
                onSubmitEditing={this.submitSearch.bind(this)}
              />

              <Icon
                type = 'entypo'
                name='magnifying-glass'
                underlayColor='grey'
                size= {20}
                raised
                onPress={() => this.submitSearch(this.state.text)}
              />

            </View>
          </View>

        </KeyboardAvoidingView>
      );
    }
  }
}