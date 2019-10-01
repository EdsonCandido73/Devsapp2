import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { connect } from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = createBottomTabNavigator({
	ConversasStack:{
		screen:ConversasStack,
		navigationOptions:{
			tabBarLabel:'Conversas',
			header:null
		}
	},
	ContatoList:{
		screen:ContatoList,
		navigationOptions:{
			tabBarLabel:'Contatos'
		}
	},
	Config:{
		screen:Config,
		navigationOptions:{
			tabBarLabel:'Configurações'
		}
	},
},{
	defaultNavigationOptions:{
		animationsEnabled:true,
		swipeEnabled:false,
	}
});

	ConversasStack.navigationOptions = ({ navigation }) => {
		let tabBarVisible = true;

		if(navigation.state.index > 0) {
			tabBarVisible = false;
		}
		return {
			tabBarVisible
		};
	};

	let ConversasListContainer = createAppContainer(ConversasNavigator);

export default ConversasListContainer;