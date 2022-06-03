/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow strict-local
 */
import { NativeBaseProvider, Button, Icon, Box, Input, Checkbox, Image, HStack, Spinner, Heading } from 'native-base'
import React, { useState, useEffect } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
  Alert,
  ActivityIndicator,
  LogBox

} from 'react-native';

import { auth } from '../firebase/firebase-conf';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { GoogleAuthProvider, signInWithPopup,signInWithRedirect } from "firebase/auth";


LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);


const Login = ({ navigation }) => {

  const [signIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [state, setState] = useState({});


  const createTwoButtonAlert = () =>
    Alert.alert(
      "",
      "That Email are already In use",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


  // const createUser = () => {
  //   createUserWithEmailAndPassword(auth, userEmail, password)
  //     .then((re) => {
  //       console.log(re);
  //       setIsSignedIn(true);
  //       navigation.navigate('Home', { name: 'Home' });
  //     })
  //     .catch((re) => {
  //       //createTwoButtonAlert();
  //     })
  // }

  const spiner = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" />
      </View>
    );
  }



  const signInUser = () => {
    //setIsLoading(true);
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((re) => {
        console.log('sign in success');
        navigation.navigate('Home', { name: 'Home' });
      })
      .catch((re) => {
        //createTwoButtonAlert();
      })
  }
  
  const provider = new GoogleAuthProvider();
auth.languageCode = 'it';
  const googleLogin = () => {
    auth.signInWithRedirect(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('google')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  useEffect(() => {
    signInUser();
    return () => {
      setState({}); 
    };
  }, []);

  return (


    <NativeBaseProvider>
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../asset/trans.jpeg')}
          style={{ height: Dimensions.get('window').height / 2.5 }}>
          <View style={styles.firstVue}>
            <Text style={styles.firstVueText}>Movies Go</Text>
          </View>

        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={{ padding: 40 }}>
            <Text style={{ color: '#4632A1', fontSize: 34 }}>Welcome</Text>
            <Text>That
              Don't have an account ?
              <Text style={{ color: 'red', fontStyle: 'italic' }}> Register Now</Text>
            </Text>

            <View style={{ marginTop: 17 }}>

              <Box style={{ marginTop: 10, flex: 1 }}>
                <Text>Email</Text>
                <Input placeholder='pascal@gmail.com' value={userEmail} onChangeText={text => setUserEmail(text)} keyboardType='email-address' flex={'1'} borderColor={'#4632A1'} borderBottomWidth={'10'}></Input>
              </Box>

              <Box style={{ marginTop: 15, flex: 1 }}>

                <Text>Password</Text>
                <Input secureTextEntry={true} placeholder='******' value={password} onChangeText={text => setPassword(text)} flex={'1'} borderColor={'#4632A1'} borderBottomWidth={'10'}></Input>
              </Box>

              <View style={styles.forgotPassword}>
                <Box style={{ flex: 1, flexDirection: 'row' }}>
                  <Checkbox colorScheme="purple" defaultIsChecked value="purple" accessibilityLabel="This is a dummy checkbox" />
                  <Text style={{ color: '#8f9195', paddingLeft: 4 }}>Remember Me</Text>
                </Box>




                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#8f9195', alignSelf: 'flex-end' }}>Forgot Password</Text>
                </View>

              </View>

              <View style={{ marginTop: 10 }}>


                <Button variant="outline" colorScheme="success" onPress={signInUser}>
                  Sign In
                </Button>
              </View>
              <View style={{ marginTop: 40, flex: 1 }}>

                <Text style={{ margin: 20, textAlign: 'center', }}> Or Another Method</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                  <View>
                    <Button style={{ backgroundColor: '#ffffff' }}>
                      <Image size={50} borderRadius={100} source={require('../asset/facebook.jpeg')} alt="Alternate Text" />
                    </Button>
                  </View>
                  <View>
                    <Button style={{ backgroundColor: '#ffffff' }} onPress={googleLogin}>
                      <Image size={50} borderRadius={100} source={require('../asset/googleCon.png')} alt="Alternate Text" />
                    </Button>
                  </View>
                  <View>
                    <Button style={{ backgroundColor: '#ffffff' }}>
                      <Image size={50} borderRadius={100} source={require('../asset/twitter.png')} alt="Alternate Text" />
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>


      </ScrollView>
    </NativeBaseProvider>
  );

}

LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
const styles = StyleSheet.create({
  firstVue: {
    fontSize: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  firstVueText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 50,
  },


  forgotPassword: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    flexe: 1
  },
  btn: {

  },
  container: {
    flex: 1,
    justifyContent: "center",
    position: 'absolute',
    alignItems: 'center',
    top: 100
  }

});

export default Login;
