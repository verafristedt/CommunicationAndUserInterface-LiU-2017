
import React from 'react';
import { Alert, Image, KeyboardAvoidingView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import styles from './styles.js';
import rooms from './rooms.json';
import { Icon } from 'react-native-elements';

export default class HomeScreen extends React.Component {
	constructor() {
	 	super();
	 	this.state = {currentStyle: styles.FloorButton};
  	}

  	static navigationOptions = {
    title: 'Welcome', header: null,
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
			}
	 	}
	 	if(fel == false){
				Alert.alert(
            		'Kunde inte finna sal',
            		'Försök igen!',
          		)
			}
  	}

  	render() {
	  	const { navigate } = this.props.navigation;
	    return (
	    	<KeyboardAvoidingView style={styles.container} behavior="padding">  
				<Text style={styles.Description}>
					Hitta i Täppan, Campus Norrköping
				</Text>
				<Image style={styles.Image} source={require('./img/liuLogo.png')}/>
				<Text style={styles.ChooseFloor}>
					Välj plan
				</Text>
				<Text style={styles.FloorButton} onPress={() => navigate('Floor', {floor : '3', name : 'TP3'})}>
					TP3
				</Text>
				<Text style={styles.FloorButton} onPress={() => navigate('Floor', {floor : '4', name : 'TP4'})}>
					TP4
				</Text>
				<Text style={styles.FloorButton} onPress={() => navigate('Floor', {floor : '5', name : 'TP5'})}>
					TP5
				</Text>
				<View style={styles.SearchView}>
			 		<TextInput
						style={styles.Input}
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
						ellipsizeMode={'head'}
						placeholder="t.ex.TP53"
						autoCapitalize={'characters'}
						autoCorrect={false}
						onSubmitEditing={this.submitSearch.bind(this)}
						ref={input => { this.textInput = input }} 
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

				<View style={styles.TopIcon}>
		          <Icon
		            type = 'entypo'
		            name='help'
		            underlayColor='grey'
		            size= {20}
		            raised
		          />
		        </View>

				<View style={{ height: 60 }}/>
		  </KeyboardAvoidingView>

	    );
  	}
}
