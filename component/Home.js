import React from 'react';
import {
  View,
  ScrollView,
  Text, FlatList
} from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase-conf';
import Header from './Header'
import Card from './Card'
import { useSelector } from 'react-redux'
onAuthStateChanged(auth, (user) => {

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('is sign in')
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const Home = ({ navigation }) => {
  const cardData = useSelector(state => {
    return state
  })
  const signUserOut = () => {
    signOut(auth)
      .then((re) => {
        console.log('log out succes');
        navigation.navigate('Login', { name: 'Login' });
      })
      .catch((re) => {
        console.log('log out miss');
      })
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
      keyExtractor={(item) => item.id.videoId}
        data={cardData}
        renderItem={({ item }) => {
          return <Card
            videoId={item.id.videoId}
            title={item.snippet.title}
            chanel={item.snippet.chanelTitle}

          />
        }}
      />
    </View>
  );
};
export default Home;
