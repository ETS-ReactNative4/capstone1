/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {MonoText} from '../components/StyledText';
import LoginForm from '../components/LoginForm';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={-150}
        behavior="padding"
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <SafeAreaView style={styles.container}>
          <View style={styles.inner}>
            <View>
              <Text style={styles.brandName}>Taste Makers</Text>
              <Text style={styles.title}>What are you loving this week? </Text>
            </View>
            <LoginForm style={styles.loginForm} navigate={navigate} />
            <View>
              <TouchableOpacity
                onPress={() => navigate('SignUp')}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>Create New User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardAvoid: {},
  container: {
    alignItems: 'center',
    backgroundColor: '#034f84'
  },
  inner: {},
  brandName: {
    marginTop: 150,
    fontSize: 50,
    color: '#f7786b',
    textAlign: 'center'
  },
  error: {
    color: `#eb4034`
  },
  title: {
    alignSelf: 'center',
    color: '#FFF',
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#2980b9',
    width: 200,
    paddingVertical: 10,

    marginBottom: 250,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  loginForm: {}
});

const mapState = state => ({
  user: state.user
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(LoginScreen);
