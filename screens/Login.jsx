import React from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// common
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

// styles
import styles from '../styles'

// actions
import { login } from '../actions/user.js'

// firebase 
import firebase from 'firebase'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  }

  componentDidMount = () => {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if(user){
    //     this.props.navigation.navigate('Profile')
    //   }
    // })
    if(this.props.user && this.props.user.email !== null){
      this.props.navigation.navigate('Profile')
    }
  }

  componentDidUpdate = () => {
    if(this.props.user && this.props.user.email !== null){
      this.props.navigation.navigate('Profile')
    }
  }

  login = () => {
    const { email, password } = this.state;
    if(email.length > 0 && password.length > 0) {
      this.props.login(email, password);
    } 
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Text style={myStyle.logo}> Pomopal </Text>
        <TextInput
          style={styles.inputBorder}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputBorder}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => this.login()}>
      		<Text style={{ color:"#FFF", fontWeight:"500" }}>Login</Text>
      	</TouchableOpacity>
        <TouchableOpacity 
          style={{ alignSelf:"center", marginTop: 20 }}
          onPress={() => navigate('Signup')}>
            <Text style={{ color:"#414959", fontSize:13 }}>
              New to Pomopal? <Text style={{ fontWeight:"500", color:"rgb(251, 114, 153)" }}>Sign Up</Text>
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  logo: {
    color: "rgb(251, 114, 153)",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 100,
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)