import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import LoadingItem from '../components/LoadingItem';
import { checkLogin, changeEmail, changePassword, SignInAction } from '../actions/AuthActions';

export class SignIn extends Component {

	static navigationOptions = {
		title:'Login'
	}

	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};

	}

	componentDidUpdate() {
		if(this.props.status == 1) {
			Keyboard.dismiss();
			this.props.navigation.navigate('Conversas');
		}
	}


	render() {
		return(
			<View style={styles.container}>
				<Text>Digite seu E-Mail</Text>
				<TextInput style={styles.input} value={this.props.email} onChangeText={this.props.changeEmail} />

				<Text>Digite sua Senha</Text>
				<TextInput secureTextEntry={true} style={styles.input} value={this.props.password} onChangeText={this.props.changePassword} />

				<Button style={styles.button} title="Entrar" onPress={()=>{
					this.setState({loading:true});
					this.props.SignInAction(this.props.email, this.props.password, ()=>{
						this.setState({loading:false});
					});
				}} />

				<LoadingItem visible={this.state.loading} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	input:{
		width:'80%',
		fontSize:18,
		height:50,
		backgroundColor:'#DDDDDD',
	},
	button:{
		paddingTop:10,
		marginTop:10
	}
});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		email:state.auth.email,
		password:state.auth.password,
		status:state.auth.status
	};
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, SignInAction })(SignIn);
export default SignInConnect;